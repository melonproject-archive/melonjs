import { ValidationError } from './ValidationError';

export class ZeroAddressError extends ValidationError {
  public name = 'ZeroAddressError';
  public message = "The address can't be empty (address(0)).";
}
