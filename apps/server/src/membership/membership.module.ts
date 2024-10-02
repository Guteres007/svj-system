import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseModule } from '@server/house/house.module';
import { UserModule } from '@server/user/user.module';
import { HouseRequest } from './entities/house-request.entity';
import { UserHouse } from './entities/user-house.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserHouse, HouseRequest]),
    UserModule,
    HouseModule,
  ],
})
export class MembershipModule {}
