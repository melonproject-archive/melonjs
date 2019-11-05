import { ValidationError } from './ValidationError';

export class ZeroAddressError extends ValidationError {
  public readonly message = "The address can't be address(0)";
}
