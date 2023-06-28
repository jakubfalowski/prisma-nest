import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SofascoreGetParamDto, SofascorePostDto } from './sofascore.dto';

@Injectable()
export class SofascoreService {
  constructor(private readonly prismaService: PrismaService) {}

  async createSofascore(sofascoreDto: SofascorePostDto) {
    return this.prismaService.sofascore.create({
      data: sofascoreDto,
    });
  }

  async getCompareData(compareData: SofascoreGetParamDto) {
    const data = await this.prismaService.$queryRawUnsafe(
      `SELECT DISTINCT *,
        fminside.Overall AS overalFM, fminside.Pace AS paceFM, fminside.Shooting AS shootingFM, fminside.Passing AS passingFM, fminside.Dribbling AS dribblingFM, futhead.Dribbling AS dribblingFIFA, fminside.Defense AS defenseFM, fminside.Physical AS physicalFM
      FROM
        karty.fminside, karty.futhead, karty.sofascore
      WHERE
        fminside.Name = futhead.Name
      AND futhead.Name = sofascore.Name AND sofascore.NAME = '${compareData.name}'
      `,
    );
    return data;
  }

  async getMaxRatings() {
    const data = await this.prismaService.$queryRawUnsafe(
      `SELECT DISTINCT MAX(sofascore.Goals), MAX(sofascore.Shots), MAX(sofascore.Dribbling), MAX(sofascore.KeyPasses), MAX(sofascore.DangerousSituation), MAX(sofascore.Shots), MAX(sofascore.PercentAccuracyPasses), MAX(sofascore.BeingFouled), MAX(sofascore.Clearances), MAX(sofascore.Interceptions), MAX(sofascore.Minutes), MAX(sofascore.PercentGround), MAX(sofascore.PercentHeader), MAX(sofascore.Rating), MAX(sofascore.Tackles)
        FROM karty.sofascore`,
    );
    return data;
  }
}
