import { createTestEnvironment, TestEnvironment } from '../../../../utils/tests/createTestEnvironment';

import { MatchingMarket } from './MatchingMarket';
import { SimpleMarketBytecode } from '../../../../abis/SimpleMarket.bin';

describe('MatchingMarket', () => {
  let environment: TestEnvironment;
  let matchingMarket: MatchingMarket;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = MatchingMarket.deploy(environment, SimpleMarketBytecode, environment.accounts[0]);
    matchingMarket = await deploy.send(await deploy.prepare());
  });

  it('should check if the exchange adapter has an address', async () => {
    const result = matchingMarket.contract.address;
    expect(result.startsWith('0x')).toBe(true);
  });

  fit('should get an order', async () => {
    const result = await matchingMarket.getOffer('0');
    console.log(result);
  });
});
