import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodebooksModule } from './codebooks/codebooks.module';
import { BenefitsModule } from './benefits/benefits.module';

@Module({
  imports: [BenefitsModule, CodebooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
