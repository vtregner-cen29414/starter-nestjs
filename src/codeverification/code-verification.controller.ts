import { Body, Controller, HttpCode, Post, UseFilters } from "@nestjs/common";
import { WebApiExceptionFilter } from "../web-api-exception-filter";
import { CreateCodeRequest } from "../web-api/api/codeverification/create-code-request";
import { CreateCodeResponse } from "../web-api/api/codeverification/create-code-response";

@Controller('webapi/api/v1/codeverification')
@UseFilters(new WebApiExceptionFilter())
export class CodeVerificationController {
  @Post('create')
  @HttpCode(200)
  createCodeVerification(@Body() request: CreateCodeRequest): CreateCodeResponse {
    return { code: '8619EA19' };
  }
}
