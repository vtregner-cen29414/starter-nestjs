import { Module } from '@nestjs/common';
import { CodebooksController } from './codebooks.controller';
import { AppService } from '../app.service';

@Module({
  controllers: [CodebooksController],
  providers: [AppService],
})
export class CodebooksModule {}
