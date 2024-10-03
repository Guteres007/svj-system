import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { House } from '@server/house/entities/house.entity';
import { HouseService } from './house.service';
import { AuthenticatedUser } from '@server/auth/authenticated-user.decorator';
import { User } from '@server/user/user.entity';
import { HouseSelectOptions } from './entities/house-select-options.entity';

@Resolver()
export class HouseResolver {
  constructor(private readonly houseService: HouseService) {}

  // @Mutation(() => House)
  // async findHouseByStreet(@Args('streetName') streetName: string): Promise<House> {
  //   await this.houseService.findHouseByStreet(streetName);
  //   return { id: 1 } as House;
  // }
  //
  //

  @Query(() => [HouseSelectOptions])
  async houseUserHouses(
    @AuthenticatedUser() user: User,
  ): Promise<HouseSelectOptions[]> {
    return await this.houseService.getUserHouses(user).then((houses) => {
      return houses.map((house) => {
        return {
          id: house.id,
          name: house.name,
        };
      });
    });
  }

  @Query(() => House)
  async houseDetail(@Args('id', { type: () => ID }) id: string) {
    return await this.houseService.getHouseDetail(id);
  }
}
