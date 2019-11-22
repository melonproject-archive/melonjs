import { MaxPositions } from './MaxPositions';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { MaxPositionsBytecode } from '../../../abis/MaxPositions.bin';

describe('MaxPositions', () => {
  let environment: TestEnvironment;
  let maxPositions: MaxPositions;
  const max = 10;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = MaxPositions.deploy(environment, MaxPositionsBytecode, environment.accounts[0], max);
    maxPositions = await deploy.send(await deploy.prepare());
  });

  it('should return the max number of positions', async () => {
    const result = await maxPositions.getMaxPositions();
    expect(result).toEqual(max);
  });

  it('should return the correct identifier', async () => {
    const result = await maxPositions.getIdentifier();
    expect(result).toBe('Max positions');
  });
});
