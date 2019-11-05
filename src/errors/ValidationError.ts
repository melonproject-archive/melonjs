export class ValidationError extends Error {
  public readonly name = 'ValidationError';

  constructor(message?: string) {
    super(message);
  }
}
