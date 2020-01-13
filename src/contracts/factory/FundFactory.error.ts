import { ValidationError } from '../../errors/ValidationError';
import { Address } from '../../Address';

export class ComponentNotSetError extends ValidationError {
  public readonly name = 'ComponentNotSetError';
  constructor(message: string = 'Component has not been set yet.') {
    super(message);
  }
}

export class ComponentAlreadySetError extends ValidationError {
  public readonly name = 'ComponentAlreadySetError';
  constructor(public readonly address: Address, message: string = 'Component has already been set yet.') {
    super(message);
  }
}

export class DenominationAssetNotRegisteredError extends ValidationError {
  public readonly name = 'DenominationAssetNotRegisteredError';
  constructor(message: string = 'Denomination asset must be registered.') {
    super(message);
  }
}
export class FundSetupAlreadyCompleteError extends ValidationError {
  public readonly name = 'FundSetupAlreadyCompleteError';
  constructor(message: string = 'Setup already complete.') {
    super(message);
  }
}

export class FundSetupAlreadyStartedError extends ValidationError {
  public readonly name = 'FundSetupAlreadyStartedError';
  constructor(message: string = 'Fund setup has already been started.') {
    super(message);
  }
}

export class RouteNotCreatedError extends ValidationError {
  constructor(public readonly name: string, message: string = 'Route has not been created.') {
    super(message);
  }
}

export class RouteAlreadyCreatedError extends ValidationError {
  constructor(public readonly name: string, message: string = 'Route has already been created.') {
    super(message);
  }
}
