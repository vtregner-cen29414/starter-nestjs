import { HttpException } from '@nestjs/common';

export class WebApiException extends HttpException {
  constructor(public code: string, message: string, status: number) {
    super(code, status);
  }
}
