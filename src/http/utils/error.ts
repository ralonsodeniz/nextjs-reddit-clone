export class HTTPError extends Error {
  public status: number;
  public statusText: string;
  public message: string;
  public errors?: string[];

  constructor(
    status: number,
    statusText: string,
    message: string,
    errors?: string[],
  ) {
    super(message);
    this.message = message;
    this.status = status;
    this.statusText = statusText;
    this.errors = errors;
  }
}
