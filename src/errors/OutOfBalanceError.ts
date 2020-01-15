import { ValidationError } from './ValidationError';
import BigNumber from 'bignumber.js';

export class OutOfBalanceError extends ValidationError {
  public name = 'OutOfBalanceError';

  constructor(
    public readonly amount: BigNumber,
    public readonly balance: BigNumber,
    message: string = 'Requested amount exceeds current balance.',
  ) {
    super(message);
  }
}
