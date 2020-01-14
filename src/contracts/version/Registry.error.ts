import { Address } from '../../Address';
import { ValidationError } from '../../errors/ValidationError';

export class ExchangeAdapterAlreadyRegisteredError extends ValidationError {
  public name = 'ExchangeAdapterAlreadyRegisteredError';
  constructor(public readonly adapter: Address, message: string = 'Exchange adapter is already registered.') {
    super(message);
  }
}

export class ExchangeAdapterNotRegisteredError extends ValidationError {
  public name = 'ExchangeAdapterNotRegisteredError';
  constructor(public readonly adapter: Address, message: string = 'Exchange adapter is not registered.') {
    super(message);
  }
}

export class ExchangeAdaptersRegisteredOutOfBoundsError extends ValidationError {
  public name = 'ExchangeAdaptersRegisteredOutOfBoundsError';
  constructor(
    public readonly numberOfAdapters: number,
    public readonly maxRegisteredAdapters: number,
    message: string = 'Number of registered exchange adapters exceeds the maximum.',
  ) {
    super(message);
  }
}

export class ExchangeAndAdapterDoNotMatchError extends ValidationError {
  public name = 'ExchangeAndAdapterDoNotMatchError';
  constructor(
    public readonly exchange: Address,
    public readonly adapter: Address,
    message: string = 'Exchange and adapter do not match.',
  ) {
    super(message);
  }
}

export class InvalidFundNameError extends ValidationError {
  public name = 'InvalidFundNameError';
  constructor(public readonly fundName: string, message: string = 'Fund name is invalid.') {
    super(message);
  }
}

export class CannotUseFundNameError extends ValidationError {
  public name = 'CannotUseFundNameError';
  constructor(public readonly fundName: string, message: string = 'Fund name cannot be used.') {
    super(message);
  }
}

export class VersionAlreadyRegisteredError extends ValidationError {
  public name = 'VersionAlreadyRegisteredError';
  constructor(message: string = 'Version is already registered.') {
    super(message);
  }
}

export class VersionNameAlreadyExistsError extends ValidationError {
  public name = 'VersionNameAlreadyExistsError';
  constructor(message: string = 'Version name already exists.') {
    super(message);
  }
}

export class AssetAlreadyRegisteredError extends ValidationError {
  public name = 'AssetAlreadyRegisteredError';
  constructor(message: string = 'Asset is already registered.') {
    super(message);
  }
}

export class AssetsRegisteredOutOfBoundsError extends ValidationError {
  public name = 'AssetsRegisteredOutOfBoundsError';
  constructor(
    public readonly numberOfAsset: number,
    public readonly maxRegisteredAssets: number,
    message: string = 'Number of registered assets exceeds the maximum.',
  ) {
    super(message);
  }
}

export class AssetNotRegisteredError extends ValidationError {
  public name = 'AssetNotRegisteredError';
  constructor(public readonly asset: Address, message: string = 'Asset is not registered.') {
    super(message);
  }
}

export class FeeNotRegisteredError extends ValidationError {
  public name = 'FeeNotRegisteredError';
  constructor(public readonly fee: Address, message: string = 'Fees is not registered.') {
    super(message);
  }
}
