import { ValidationError } from './ValidationError';

export class OutOfBalanceError extends ValidationError {
  public name = 'OutOfBalanceError';

  constructor(
    public readonly amount: number,
    public readonly balance: number,
    message: string = 'Requested amount exceeds current balance.',
  ) {
    super(message);
  }
}
