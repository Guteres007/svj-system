import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HouseRequest } from './entities/house-request.entity';
import { UserHouse } from './entities/user-house.entity';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(UserHouse)
    private userHouseRepository: Repository<UserHouse>,
    @InjectRepository(HouseRequest)
    private houseRequestRepository: Repository<HouseRequest>,
  ) {}

  // async createRequest(userId: number, houseId: number): Promise<HouseRequest> {
  //   // Implementace vytvoření žádosti
  // }

  // async approveRequest(requestId: number): Promise<UserHouse> {
  //   // Implementace schválení žádosti a vytvoření UserHouse
  // }

  // async rejectRequest(requestId: number): Promise<HouseRequest> {
  //   // Implementace zamítnutí žádosti
  // }

  // async getUserMemberships(userId: number): Promise<UserHouse[]> {
  //   // Implementace získání členství uživatele
  // }
}
