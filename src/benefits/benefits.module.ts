import { Module } from '@nestjs/common';
import { BenefitsController } from './benefits.controller';
import { AppService } from '../app.service';

@Module({
  controllers: [BenefitsController],
  providers: [AppService],
})
export class BenefitsModule {}
