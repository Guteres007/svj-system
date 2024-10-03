import { Module } from '@nestjs/common';
import { HouseService } from '@server/house/house.service';
import { HouseResolver } from '@server/house/house.resolver';
import AresModule from '@server/ares/ares.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from '@server/house/entities/house.entity';
import { HouseSearchResolver } from '@server/house/house-search.resolver';
import { HouseSearchService } from '@server/house/house-search.service';
import { HouseSearch } from '@server/house/entities/house-search.entity';
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
