import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FminsidePostDto, FminsideGetParamDto } from './fminside.dto';

@Injectable()
export class FminsideService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFminside(fminsideDto: FminsidePostDto) {
    return this.prismaService.fminside.create({
      data: fminsideDto,
    });
  }

  async getCompareData(compareData: FminsideGetParamDto) {
    const escapedStatFifa = `futhead.${compareData.stat} AS 'FIFA'`;
    const escapedStatFm = `fminside.${compareData.stat} AS 'FM'`;
    const sort = `${compareData.game}.${compareData.stat} ${compareData.sortBy}`;
    const data = await this.prismaService.$queryRawUnsafe(
      `SELECT
      fminside.Name,
      ${escapedStatFm},
      ${escapedStatFifa}
    FROM
      karty.fminside, karty.futhead
    WHERE
      fminside.Name = futhead.Name
    ORDER BY ${sort}`,
    );
    return data;
  }
}
