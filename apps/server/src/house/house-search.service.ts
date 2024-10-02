import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@server/user/user.entity';
import { House } from './house.entity';
import { HouseSearch } from './entities/house-search.entity';

@Injectable()
export class HouseSearchService {
  constructor(
    @InjectRepository(HouseSearch)
    private houseSearchRepository: Repository<HouseSearch>,
  ) {}
  async saveHouseSearch({
    user,
    house,
  }: {
    user: User;
    house: House;
  }): Promise<HouseSearch> {
    return this.houseSearchRepository.save({
      user,
      house,
    });
  }

  async getHouseSearch(id: string): Promise<HouseSearch | null> {
    return await this.houseSearchRepository.findOne({
      where: { id },
      relations: ['user', 'house'],
    });
  }
}
