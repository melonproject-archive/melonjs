import { ValidationError } from './ValidationError';

export class OutOfBalanceError extends ValidationError {
  constructor(public readonly amount: number, public readonly balance: number, message?: string) {
    super(message || `Requested Amount: ${amount}, Current balance: ${balance}`);
  }
}
