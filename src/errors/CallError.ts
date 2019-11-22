export class CallError extends Error {
  public name = 'CallError';

  constructor(message?: string) {
    super(message);
  }
}
