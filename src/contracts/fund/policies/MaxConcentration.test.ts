import { MaxConcentration } from './MaxConcentration';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { MaxConcentrationBytecode } from '../../../abis/MaxConcentration.bin';
import BigNumber from 'bignumber.js';

describe('MaxConcentration', () => {
  let environment: TestEnvironment;
  let maxConcentration: MaxConcentration;
  const max = new BigNumber('100000000000000000');

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = MaxConcentration.deploy(environment, MaxConcentrationBytecode, environment.accounts[0], max);
    maxConcentration = await deploy.send(await deploy.prepare());
  });

  it('should return the price tolerance', async () => {
    const result = await maxConcentration.getMaxConcentration();
    expect(result.isEqualTo(max)).toBe(true);
  });

  it('should return the correct identifier', async () => {
    const result = await maxConcentration.getIdentifier();
    expect(result).toBe('Max concentration');
  });
});
