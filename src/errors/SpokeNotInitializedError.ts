import { ValidationError } from './ValidationError';
import { Address } from '../Address';

export class SpokeNotInitializedError extends ValidationError {
  public name = 'SpokeNotInitializedError';

  constructor(public readonly spoke: Address, message: string = 'The spoke is not initialized.') {
    super(message);
  }
}
