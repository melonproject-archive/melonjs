import { ValidationError } from './ValidationError';
import BigNumber from 'bignumber.js';

export class InsufficientAllowanceError extends ValidationError {
  public name = 'InsufficientAllowanceError';

  constructor(
    public readonly amount: BigNumber,
    public readonly allowance: BigNumber,
    message: string = 'Requested amount exceeds current allowance.',
  ) {
    super(message);
  }
}
