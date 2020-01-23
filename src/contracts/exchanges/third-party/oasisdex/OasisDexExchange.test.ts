import { createTestEnvironment, TestEnvironment } from '../../../../utils/tests/createTestEnvironment';
import BigNumber from 'bignumber.js';

import { OasisDexExchange } from './OasisDexExchange';
import { OasisDexExchangeBytecode } from '../../../../abis/OasisDexExchange.bin';

describe('OasisDex', () => {
  let environment: TestEnvironment;
  let oasisDex: OasisDexExchange;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = OasisDexExchange.deploy(
      environment,
      OasisDexExchangeBytecode,
      environment.accounts[0],
      new BigNumber('999999999999'),
    );

    oasisDex = await deploy.send(await deploy.prepare());
  });

  it('should check if the exchange adapter has an address', async () => {
    const result = oasisDex.contract.address;
    expect(result.startsWith('0x')).toBe(true);
  });

  fit('should get an order', async () => {
    const result = await oasisDex.getOffer(new BigNumber(0));
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
