import { Address } from '../../../Address';
import { ValidationError } from '../../../errors/ValidationError';
import BigNumber from 'bignumber.js';

export class KyberNotRegisteredWithFundError extends ValidationError {
  public readonly name = 'KyberNotRegisteredWithFundError';
  constructor(
    public readonly kyberAddress: Address,
    message: string = 'Kyber Exchange is not registered for this fund.',
  ) {
    super(message);
  }
}

export class MelonEngineNotRegisteredWithFundError extends ValidationError {
  public readonly name = 'KyberNotRegisteredWithFundError';

  constructor(
    public readonly kyberAddress: Address,
    message: string = 'Kyber Exchange is not registered for this fund.',
  ) {
    super(message);
  }
}

export class FundIsShutDownError extends ValidationError {
  public readonly name = 'FundIsShutDownError';
  constructor(public readonly fund: Address, message: string = 'Fund is shutdown.') {
    super(message);
  }
}

export class AdapterMethodNotAllowedError extends ValidationError {
  public readonly name = 'AdapterMethodNotAllowedError';

  constructor(
    public readonly adapter: Address,
    public readonly signature: string,
    message: string = 'Adapter Method is not allowed.',
  ) {
    super(message);
  }
}

export class InsufficientBalanceError extends ValidationError {
  public readonly name = 'InsufficientBalanceError';

  constructor(
    public readonly requested: BigNumber,
    public readonly actual: BigNumber,
    message: string = 'Insufficient funds for this trade.',
  ) {
    super(message);
  }
}
