import { ValidationError } from './ValidationError';
import { Address } from '../Address';

export class HubIsShutdownError extends ValidationError {
  public name = 'HubIsShutdownError';

  constructor(public readonly hub: Address, message: string = 'The fund is not active.') {
    super(message);
  }
}
