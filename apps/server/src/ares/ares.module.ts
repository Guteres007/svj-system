import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AresService } from './ares.service';
@Module({
  imports: [HttpModule],
  providers: [AresService],
  exports: [AresService],
})
export default class AresModule {}
