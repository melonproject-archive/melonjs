import { Address } from '../../Address';
import { TestEnvironment } from './createTestEnvironment';
import { AccountingFactory } from '../../contracts/fund/accounting/AccountingFactory';
import { AccountingFactoryBytecode } from '../../abis/AccountingFactory.bin';
import { Version } from '../../contracts/version/Version';
import { VersionBytecode } from '../../abis/Version.bin';
import { randomAddress } from './randomAddress';
import { BigNumber } from 'bignumber.js';
import { Registry } from '../../contracts/version/Registry';
import { Weth } from '../../contracts/dependencies/token/Weth';
import { FeeManagerFactory } from '../../contracts/fund/fees/FeeManagerFactory';

export async function deployVersion(environment: TestEnvironment, creator: Address, registry: Registry, weth: Weth) {
  const deployAccountingFactory = AccountingFactory.deploy(
    environment,
    AccountingFactoryBytecode,
    environment.accounts[0],
  );
  const accountingFactory = await deployAccountingFactory.send(await deployAccountingFactory.prepare());

  const deployFeeManagerFactory = FeeManagerFactory.deploy(
    environment,
    AccountingFactoryBytecode,
    environment.accounts[0],
  );
  const feeManagerFactory = await deployFeeManagerFactory.send(await deployAccountingFactory.prepare());

  const deploy = Version.deploy(environment, VersionBytecode, creator, {
    accountingFactory: accountingFactory.contract.address,
    feeManagerFactory: feeManagerFactory.contract.address,
    participationFactory: randomAddress(),
    policyManagerFactory: randomAddress(),
    sharesFactory: randomAddress(),
    tradingFactory: randomAddress(),
    vaultFactory: randomAddress(),
    registry: registry.contract.address,
    postDeployOwner: creator,
  });
  const version = await deploy.send(await deploy.prepare());

  {
    const tx = registry.registerAsset(creator, {
      address: weth.contract.address,
      name: 'Test Asset',
      symbol: 'TAT',
      url: 'https://tat.tat/',
      reserveMin: new BigNumber(100000),
      standards: [1, 2, 3],
      sigs: ['0000'],
    });
    await tx.send(await tx.prepare());
  }

  {
    const tx = registry.setNativeAsset(creator, weth.contract.address);
    await tx.send(await tx.prepare());
  }

  {
    const tx = registry.registerVersion(creator, version.contract.address, 'test-version');
    await tx.send(await tx.prepare());
  }

  {
    const tx = registry.setMlnToken(creator, randomAddress());
    await tx.send(await tx.prepare());
  }

  return version;
}
