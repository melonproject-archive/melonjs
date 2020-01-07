import { Participation, AssetIsNotRegisteredError } from './Participation';
import BigNumber from 'bignumber.js';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployWeth } from '../../../utils/tests/deployWeth';
import { deployRegistry } from '../../../utils/tests/deployRegistry';
import { Registry } from '../../version/Registry';
import { deployParticipation } from '../../../utils/tests/deployParticipation';
import { Weth } from '../../dependencies/token/Weth';
import { PermissiveAuthority } from '../../dependencies/authorization/PermissiveAuthority';
import { PermissiveAuthorityBytecode } from '../../../abis/PermissiveAuthority.bin';
import { randomAddress } from '../../../utils/tests/randomAddress';

describe('Participation', () => {
  let environment: TestEnvironment;
  let participation: Participation;
  let registry: Registry;
  let weth: Weth;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    weth = await deployWeth(environment, environment.accounts[0]);

    registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);

    const tx = registry.registerAsset(environment.accounts[0], {
      address: weth.contract.address,
      name: 'Test Asset',
      symbol: 'TAT',
      url: 'https://tat.tat/',
      reserveMin: new BigNumber(100000),
      standards: [1, 2, 3],
      sigs: ['0x30303030'],
    });
    await tx.send(await tx.prepare());

    const deployPermissiveAuthority = PermissiveAuthority.deploy(
      environment,
      PermissiveAuthorityBytecode,
      environment.accounts[0],
    );

    const permissiveAuthority = await deployPermissiveAuthority.send(await deployPermissiveAuthority.prepare());

    participation = await deployParticipation(environment, environment.accounts[0], {
      hub: permissiveAuthority.contract.address,
      defaultAssets: [weth.contract.address],
      registry: registry.contract.address,
    });
  });

  it('should return an array of investor addresses', async () => {
    const result = await participation.getHistoricalInvestors();
    expect(result.length).toBeGreaterThanOrEqual(0);
    result.forEach(investor => {
      expect(investor.startsWith('0x')).toBe(true);
    });
  });

  it('should return whether an investor has a request', async () => {
    const result = await participation.hasRequest('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
    expect(result === true || result === false).toBe(true);
  });

  it('should return whether an investor has an expired request', async () => {
    const result = await participation.hasExpiredRequest('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
    expect(result === true || result === false).toBe(true);
  });

  it('should return whether an investor has already invested', async () => {
    const result = await participation.hasInvested('0x8a2da4fc8c6854be3f754f8dddd37a2b9d69c8c2');
    expect(result === true || result === false).toBe(true);
  });

  it('should return whether an investment with a certain asset is allowed', async () => {
    const result = await participation.canInvestWithAsset('0xec67005c4e498ec7f55e092bd1d35cbc47c91892');
    expect(result === true || result === false).toBe(true);
  });

  it('should enable investment for an asset', async () => {
    const tx = participation.enableInvestment(environment.accounts[0], [weth.contract.address]);
    const txResult = await tx.send(await tx.prepare());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });

  it('should throw an error for an asset which is not registered', async () => {
    const tx = participation.enableInvestment(environment.accounts[0], [randomAddress()]);
    await expect(tx.validate()).rejects.toThrowError(AssetIsNotRegisteredError);
  });

  it('should disable investment for an asset', async () => {
    const tx = participation.disableInvestment(environment.accounts[0], [randomAddress()]);
    const txResult = await tx.send(await tx.prepare());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });
});
