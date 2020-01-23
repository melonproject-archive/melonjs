import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { MaxPositions } from './MaxPositions';
import { MaxPositionsBytecode } from '../../../abis/MaxPositions.bin';

describe('Policy', () => {
  let environment: TestEnvironment;
  let maxPositions: MaxPositions;
  const max: number = 10;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    // Policy itself cannot be deployed (empty bytecode, it's really just an interface)
    const deploy = MaxPositions.deploy(environment, MaxPositionsBytecode, environment.accounts[0], max);
    maxPositions = await deploy.send(await deploy.prepare());
  });

  it('should return the identifier of a policy', async () => {
    const result = await maxPositions.getIdentifier();
    expect(result).toBe('MaxPositions');
  });

  it('should return the position of a policy', async () => {
    const result = await maxPositions.getPosition();
    expect(result).toBe(1);
  });
});
