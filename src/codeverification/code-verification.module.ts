import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { CodeVerificationController } from './code-verification.controller';

@Module({
  controllers: [CodeVerificationController],
  providers: [AppService],
})
export class CodeVerificationModule {}
