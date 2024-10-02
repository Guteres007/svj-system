import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseResolver } from './house.resolver';
import AresModule from '@server/ares/ares.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from './house.entity';
import { HouseSearchResolver } from './house-search.resolver';
import { HouseSearchService } from './house-search.service';
import { HouseSearch } from './entities/house-search.entity';
@Module({
  imports: [AresModule, TypeOrmModule.forFeature([House, HouseSearch])],
  providers: [
    HouseService,
    HouseResolver,
    HouseSearchResolver,
    HouseSearchService,
  ],
})
export class HouseModule {}
