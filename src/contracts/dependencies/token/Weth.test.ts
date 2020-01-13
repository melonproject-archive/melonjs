import { toWei, fromWei } from 'web3-utils';
import { Weth } from './Weth';
import { WETHBytecode } from '../../../abis/WETH.bin';
import { toBigNumber } from '../../../utils/toBigNumber';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { OutOfBalanceError } from '../../../errors/OutOfBalanceError';
import { randomAddress } from '../../../utils/tests/randomAddress';
import BigNumber from 'bignumber.js';

describe('Weth', () => {
  let environment: TestEnvironment;
  let weth: Weth;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const contract = Weth.deploy(environment, WETHBytecode, environment.accounts[0]);
    weth = await contract.send(await contract.prepare());
  });

  it('should allow deposit and withdrawal', async () => {
    const before = await weth.getBalanceOf(environment.accounts[1]);
    expect(fromWei(before.toFixed(0))).toBe('0');

    {
      const tx = weth.deposit(environment.accounts[1], toBigNumber(toWei('1')));
      await tx.send(await tx.prepare());
    }

    const after = await weth.getBalanceOf(environment.accounts[1]);
    expect(fromWei(after.toFixed(0))).toBe('1');

    {
      const tx = weth.withdraw(environment.accounts[1], toBigNumber(toWei('1')));
      await tx.send(await tx.prepare());
    }

    const final = await weth.getBalanceOf(environment.accounts[1]);
    expect(fromWei(final.toFixed(0))).toBe('0');
  });

  it('should return the total supply of the token', async () => {
    const result = await weth.getTotalSupply();
    expect(fromWei(result.toFixed(0))).toBe('0');
  });

  it('should throw OutOfBalanceError', async () => {
    const tx = weth.withdraw(randomAddress(), new BigNumber(2));

    jest.spyOn(weth, 'getBalanceOf').mockReturnValue(new Promise(resolve => resolve(new BigNumber(1))));

    const rejects = expect(tx.validate()).rejects;
    await rejects.toThrowError(OutOfBalanceError);
    await rejects.toMatchObject({
      amount: expect.any(Number),
      balance: expect.any(Number),
    });
  });
});
