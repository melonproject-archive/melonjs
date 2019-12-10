import { createTestEnvironment, TestEnvironment } from '../../../../utils/tests/createTestEnvironment';
import BigNumber from 'bignumber.js';

import { MatchingMarket } from './MatchingMarket';
import { MatchingMarketBytecode } from '../../../../abis/MatchingMarket.bin';

describe('MatchingMarket', () => {
  let environment: TestEnvironment;
  let matchingMarket: MatchingMarket;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = MatchingMarket.deploy(
      environment,
      MatchingMarketBytecode,
      environment.accounts[0],
      new BigNumber('999999999999'),
    );
    matchingMarket = await deploy.send(await deploy.prepare());
  });

  it('should check if the exchange adapter has an address', async () => {
    const result = matchingMarket.contract.address;
    expect(result.startsWith('0x')).toBe(true);
  });

  fit('should get an order', async () => {
    const result = await matchingMarket.getOffer(new BigNumber(0));
    expect(result).toMatchObject({
      makerQuantity: expect.any(BigNumber),
      makerAsset: expect.any(String),
      takerQuantity: expect.any(BigNumber),
      takerAsset: expect.any(String),
      owner: expect.any(String),
      timestamp: expect.any(Date),
    });
  });
});
