import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';

import { randomAddress } from '../../../utils/tests/randomAddress';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployWeth } from '../../../utils/tests/deployWeth';
import { deployRegistry } from '../../../utils/tests/deployRegistry';
import BigNumber from 'bignumber.js';
import { ParticipationFactory } from './ParticipationFactory';
import { ParticipationFactoryBytecode } from '../../../abis/ParticipationFactory.bin';

describe('ParticipationFactory', () => {
  let environment: TestEnvironment;
  let participationFactory: ParticipationFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = ParticipationFactory.deploy(environment, ParticipationFactoryBytecode, environment.accounts[0]);
    participationFactory = await deploy.send(await deploy.estimate());
  });

  it('should check if a contract is an instance of the ParticipationFactory', async () => {
    const result = await participationFactory.isInstance(randomAddress());
    expect(typeof result).toBe('boolean');
  });

  it('should create an instance of a Participation contract', async () => {
    const hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'accounting-test-fund',
    });

    const weth = await deployWeth(environment, environment.accounts[0]);

    const registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);

    const txRegisterAsset = await registry.registerAsset(environment.accounts[0], {
      address: weth.contract.address,
      name: 'Test Asset',
      symbol: 'TAT',
      url: 'https://tat.tat/',
      reserveMin: new BigNumber(100000),
      standards: [1, 2, 3],
      sigs: ['0000'],
    });
    await txRegisterAsset.send(await txRegisterAsset.estimate());

    const tx = participationFactory.createInstance(environment.accounts[0], {
      hub: hub.contract.address,
      defaultAssets: [weth.contract.address],
      registry: registry.contract.address,
    });

    const txResult = await tx.send(await tx.estimate());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });
});
