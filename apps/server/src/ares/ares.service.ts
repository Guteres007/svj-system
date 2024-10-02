import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AresApiResponse } from './ares.response';

@Injectable()
export class AresService {
  constructor(private httpService: HttpService) {}

  async getData({
    houseNumber,
    orientationNumber,
    municipalityName,
    streetName,
  }: {
    houseNumber: number;
    orientationNumber: number;
    municipalityName: string;
    streetName: string;
  }): Promise<AresApiResponse> {
    console.log(houseNumber, orientationNumber, municipalityName, streetName);
    return this.httpService.axiosRef
      .post<AresApiResponse>(
        'https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/vyhledat',
        {
          start: 0,
          pocet: 1,
          pravniForma: [145],
          sidlo: {
            cisloDomovni: houseNumber,
            cisloOrientacni: orientationNumber,
            nazevOkresu: municipalityName,
            nazevUlice: streetName,
          },
        },
      )
      .then(({ data }) => data);
  }
}
