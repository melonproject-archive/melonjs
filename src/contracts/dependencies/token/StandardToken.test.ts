import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { StandardToken } from './StandardToken';
import { StandardTokenBytecode } from '../../../abis/StandardToken.bin';
import BigNumber from 'bignumber.js';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { OutOfBalanceError } from '../../../errors/OutOfBalanceError';
import { ZeroAddressError } from '../../../errors/ZeroAddressError';

describe('StandardToken', () => {
  let environment: TestEnvironment;
  let standardToken: StandardToken;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = StandardToken.deploy(environment, StandardTokenBytecode, environment.accounts[0]);
    standardToken = await deploy.send(await deploy.prepare());
  });

  it('should return balance of the token', async () => {
    const result = await standardToken.getTotalSupply();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should throw OutOfBalanceError', async () => {
    const amount = new BigNumber(2);
    const tx = standardToken.transfer(randomAddress(), randomAddress(), amount);

    jest.spyOn(standardToken, 'getBalanceOf').mockReturnValue(new Promise((resolve) => resolve(new BigNumber(1))));

    const rejects = expect(tx.validate()).rejects;
    await rejects.toThrowError(OutOfBalanceError);
    await rejects.toMatchObject({
      amount: expect.any(BigNumber),
      balance: expect.any(BigNumber),
    });
  });

  it('should throw ZeroAddressError', async () => {
    const amount = new BigNumber(1);
    const from = randomAddress();
    const to = '0x0000000000000000000000000000000000000000';
    const tx = standardToken.transfer(from, to, amount);

    jest.spyOn(standardToken, 'getBalanceOf').mockReturnValue(new Promise((resolve) => resolve(new BigNumber(2))));

    await expect(tx.validate()).rejects.toThrowError(ZeroAddressError);
  });

  it('should increase the approval for an account', async () => {
    const amount = new BigNumber(1);
    const spender = randomAddress();

    const tx = standardToken.increaseApproval(environment.accounts[0], spender, amount);
    const result = await tx.send(await tx.prepare());
    expect(result.status).toBe(true);
  });
});
