import { Controller, Get, Post, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { ExternalUserIdRequest } from "./web-api/api/events/external-user-id-request";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getData();
  }

  @Post('/webapi/api/v1/events/externalIdentifiers')
  getExternalUserIdV1(@Req() _req: ExternalUserIdRequest) {
    return this.appService.getExternalUserId();
  }

  @Post('/webapi/api/v2/events/externalIdentifiers')
  getExternalUserIdV2(@Req() _req: ExternalUserIdRequest) {
    return this.appService.getExternalUserId();
  }
}
