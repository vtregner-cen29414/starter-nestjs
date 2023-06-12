import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { WebApiException } from './web-api-exception';
import { Request, Response } from 'express';

@Catch(WebApiException)
export class WebApiExceptionFilter implements ExceptionFilter {
  catch(exception: WebApiException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      errors: [
        {
          error: exception.code,
          message: exception.message,
        },
      ],
    });
  }
}
