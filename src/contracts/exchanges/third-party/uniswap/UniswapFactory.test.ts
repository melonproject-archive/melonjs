import { TestEnvironment, createTestEnvironment } from '../../../../utils/tests/createTestEnvironment';
import { UniswapFactory } from './UniswapFactory';
import { randomAddress } from '../../../../utils/tests/randomAddress';

describe('UniswapFactory', () => {
  let environment: TestEnvironment;
  let uniswapFactory: UniswapFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    uniswapFactory = new UniswapFactory(environment, randomAddress());
  });

  it('should check if the uniswap factory has an address', async () => {
    const result = uniswapFactory.contract.address;
    expect(result.startsWith('0x')).toBe(true);
  });
});
