import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { House } from './house.entity';
import { HouseService } from './house.service';

@Resolver()
export class HouseResolver {
  constructor(private readonly houseService: HouseService) {}

  // @Mutation(() => House)
  // async findHouseByStreet(@Args('streetName') streetName: string): Promise<House> {
  //   await this.houseService.findHouseByStreet(streetName);
  //   return { id: 1 } as House;
  // }
}
