import { Injectable } from '@nestjs/common';
import { AresService } from '@server/ares/ares.service';
import { ILike, Repository } from 'typeorm';
import { House } from './house.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AresApiResponse } from '@server/ares/ares.response';

@Injectable()
export class HouseService {
  constructor(
    private readonly aresService: AresService,
    @InjectRepository(House)
    private readonly houseRepository: Repository<House>,
  ) {}

  async getHouseByStreet(streetName: string): Promise<House> {
    const existedHouse = await this.houseRepository.findOne({
      where: {
        houseNumber: 629,
        orientationNumber: 48,
        municipalityName: 'Olomouc',
        streetName: ILike('%Hamerská%'),
      },
    });

    if (!existedHouse) {
      const aresData: AresApiResponse = await this.aresService.getData({
        houseNumber: 629,
        orientationNumber: 48,
        municipalityName: 'Olomouc',
        streetName: 'Hamerská',
      });
      const createHouse: Partial<House> = {
        houseNumber: aresData.ekonomickeSubjekty[0].sidlo.cisloDomovni,
        orientationNumber: aresData.ekonomickeSubjekty[0].sidlo.cisloOrientacni,
        municipalityName: aresData.ekonomickeSubjekty[0].sidlo.nazevObce,
        streetName: aresData.ekonomickeSubjekty[0].sidlo.nazevUlice,
        name: aresData.ekonomickeSubjekty[0].obchodniJmeno,
        postalCode: aresData.ekonomickeSubjekty[0].sidlo.psc,
        fullAddress: aresData.ekonomickeSubjekty[0].sidlo.textovaAdresa,
        cin: aresData.ekonomickeSubjekty[0].ico,
      };

      return this.houseRepository.save(
        this.houseRepository.create(createHouse),
      );
    }
    return existedHouse;
  }
}
