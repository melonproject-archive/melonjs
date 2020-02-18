import BigNumber from 'bignumber.js';
import { Address } from '../../../Address';
import { ValidationError } from '../../../errors/ValidationError';
import { Request } from './Participation';
export class InvestmentAssetNotAllowedError extends ValidationError {
  public readonly name = 'InvestmentAssetNotAllowedError';
  constructor(public readonly asset: Address, message: string = 'Investment not allowed in this asset.') {
    super(message);
  }
}
export class AssetIsNotRegisteredError extends ValidationError {
  public readonly name = 'AssetIsNotRegisteredError';
  constructor(public readonly asset: Address, message: string = 'This asset is not registered with the registry.') {
    super(message);
  }
}
export class InvestmentRequestExistsError extends ValidationError {
  public readonly name = 'InvestmentRequestExistsError';
  constructor(public readonly request: Request, message: string = 'Only one request can exist at a time.') {
    super(message);
  }
}
export class NoInvestmentRequestError extends ValidationError {
  public readonly name = 'NoInvestmentRequestError';
  constructor(public readonly from: Address, message: string = 'No investment request found.') {
    super(message);
  }
}
export class CancelConditionsNotMetError extends ValidationError {
  public readonly name = 'CancelConditionsNotMetError';
  constructor(public readonly from: Address, message: string = 'No cancellation condition was met.') {
    super(message);
  }
}
export class PriceNotValidError extends ValidationError {
  public readonly name = 'PriceNotValidError';
  constructor(public readonly asset: Address, message: string = 'Price not valid.') {
    super(message);
  }
}
export class InvestmentAmountTooLowError extends ValidationError {
  public readonly name = 'InvestmentAmountTooLowError';
  constructor(
    public readonly amount: BigNumber,
    message: string = 'Investment amount too low for the requested number of shares.',
  ) {
    super(message);
  }
}
export class NoSharesToRedeemError extends ValidationError {
  public readonly name = 'NoSharesToRedeemError';
  constructor(message: string = 'No shares to redeem.') {
    super(message);
  }
}
export class NotEnoughSharesToRedeemError extends ValidationError {
  public readonly name = 'NotEnoughSharesToRedeemError';
  constructor(
    public readonly availableShares: BigNumber,
    message: string = 'Not enough shares to redeem requested amount.',
  ) {
    super(message);
  }
}
export class InvestmentPolicyValidationError extends ValidationError {
  public readonly name = 'InvestmentPolicyValidationError';
  constructor(
    public readonly signature: string,
    message: string = 'Investment cannot be executed because risk management policies or compliance policies would be violated.',
  ) {
    super(message);
  }
}
