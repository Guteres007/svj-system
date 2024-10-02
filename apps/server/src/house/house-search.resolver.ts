import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HouseService } from './house.service';
import { HouseSearchService } from './house-search.service';
import { AuthenticatedUser } from '@server/auth/authenticated-user.decorator';
import { User } from '@server/user/user.entity';
import { HouseSearch } from './entities/house-search.entity';

@Resolver('HouseSearch')
export class HouseSearchResolver {
  constructor(
    private houseService: HouseService,
    private readonly houseSearchService: HouseSearchService,
  ) {}

  @Mutation(() => HouseSearch)
  async houseSearchSaveSearch(
    @Args('streetName') streetName: string,
    @AuthenticatedUser() user: User,
  ): Promise<HouseSearch> {
    const house = await this.houseService.getHouseByStreet(streetName);
    return await this.houseSearchService.saveHouseSearch({ user, house });
  }

  @Query(() => HouseSearch)
  async houseSearchResult(@Args('id', { type: () => ID }) id: string) {
    return await this.houseSearchService.getHouseSearch(id);
  }
}
