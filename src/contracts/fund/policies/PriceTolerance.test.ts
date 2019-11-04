import { PriceTolerance } from './PriceTolerance';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { PriceToleranceBytecode } from '../../../abis/PriceTolerance.bin';
import BigNumber from 'bignumber.js';

describe('PriceTolerance', () => {
  let environment: TestEnvironment;
  let priceTolerance: PriceTolerance;
  const tolerance = 10;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = PriceTolerance.deploy(environment, PriceToleranceBytecode, environment.accounts[0], tolerance);
    priceTolerance = await deploy.send(await deploy.estimateGas());
  });

  it('should return the price tolerance', async () => {
    const result = await priceTolerance.getPriceTolerance();
    expect(result.isEqualTo(new BigNumber('1e16').multipliedBy(tolerance))).toBe(true);
  });
});
