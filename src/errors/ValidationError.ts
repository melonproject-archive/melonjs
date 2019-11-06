export class ValidationError extends Error {
  public name = 'ValidationError';

  constructor(message?: string) {
    super(message);
  }
}
