import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BenefitsModule } from "./benefits/benefits.module";
import { CodebooksModule } from "./codebooks/codebooks.module";
import { CodeVerificationModule } from "./codeverification/code-verification.module";

@Module({
  imports: [BenefitsModule, CodebooksModule, CodeVerificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
