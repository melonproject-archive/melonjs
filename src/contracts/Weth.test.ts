import { toWei, fromWei } from 'web3-utils';
import { Weth } from './Weth';
import { WETHBytecode } from '../abis/WETH.bin';
import { toBigNumber } from '../utils/toBigNumber';
import { createTestEnvironment, TestEnvironment } from '../utils/tests/createTestEnvironment';

describe('Weth', () => {
  let environment: TestEnvironment;
  let weth: Weth;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const contract = Weth.deploy(environment, WETHBytecode, environment.accounts[0]);
    weth = await contract.send(await contract.estimate());
  });

  it('should allow deposit and withdrawal', async () => {
    const before = await weth.getBalanceOf(environment.accounts[1]);
    expect(fromWei(before.toFixed())).toBe('0');

    {
      const tx = weth.deposit(toBigNumber(toWei('1')), environment.accounts[1]);
      await tx.send(await tx.estimate());
    }

    const after = await weth.getBalanceOf(environment.accounts[1]);
    expect(fromWei(after.toFixed())).toBe('1');

    {
      const tx = weth.withdraw(toBigNumber(toWei('1')), environment.accounts[1]);
      await tx.send(await tx.estimate());
    }

    const final = await weth.getBalanceOf(environment.accounts[1]);
    expect(fromWei(final.toFixed())).toBe('0');
  });
});
