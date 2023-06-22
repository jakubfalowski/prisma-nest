import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  FminsideGetParamDto,
  FminsideGetStatParamDto,
  FminsidePostDto,
} from './fminside.dto';

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
      `SELECT DISTINCT
      fminside.Name,
      ${escapedStatFm},
      ${escapedStatFifa}
    FROM
      karty.fminside, karty.futhead, karty.sofascore
    WHERE
      fminside.Name = futhead.Name
      AND futhead.Name = sofascore.Name
    ORDER BY ${sort}`,
    );
    return data;
  }

  async getAverageRatings() {
    const data = await this.prismaService.$queryRawUnsafe(
      `SELECT DISTINCT AVG(futhead.Overall) AS overallFIFA, AVG(futhead.Pace) AS paceFIFA, AVG(futhead.Shooting) AS shootingFIFA, AVG(futhead.Passing) AS passingFIFA, AVG(futhead.Dribbling) AS dribblingFIFA, AVG(futhead.Defense) AS defenseFIFA, AVG(futhead.Physical) AS physicalFIFA, AVG(fminside.Overall) AS overallFM, AVG(fminside.Pace) AS paceFM, AVG(fminside.Shooting) AS shootingFM, AVG(fminside.Passing) AS passingFM, AVG(fminside.Dribbling) AS dribblingFM, AVG(fminside.Defense) AS defenseFM, AVG(fminside.Physical) AS physicalFM
        FROM karty.fminside, karty.futhead`,
    );
    return data;
  }

  async getClubData(compareStats: FminsideGetStatParamDto) {
    const fifaStat = `futhead.${compareStats.stat} AS ${compareStats.stat}FIFA`;
    const fmStat = `fminside.${compareStats.stat} AS ${compareStats.stat}FM`;
    const fifaTotalStat = `SUM(${compareStats.stat}FIFA) AS club_total_FIFA`;
    const fmTotalStat = `SUM(${compareStats.stat}FM) AS club_total_FM`;
    const sumOrderingOption = `SUM(${compareStats.stat}FIFA)`;
    const orderingOption = `futhead.${compareStats.stat}`;
    const data = await this.prismaService.$queryRawUnsafe(
      `SELECT Club, club_total_FM, club_total_FIFA
      FROM (
          SELECT Club, ${fifaTotalStat}, ${fmTotalStat},
                 ROW_NUMBER() OVER (ORDER BY ${sumOrderingOption} DESC) AS rank_order
          FROM (
              SELECT futhead.Name, futhead.Club, ${fmStat}, ${fifaStat},
                     ROW_NUMBER() OVER (PARTITION BY futhead.Club ORDER BY ${orderingOption} DESC) AS club_rank
              FROM futhead
              JOIN fminside ON futhead.Name = fminside.Name
          ) AS ranked_players
          WHERE club_rank <= 5
          GROUP BY Club
      ) AS top_players_sorted
      ORDER BY rank_order;
      
      `,
    );
    return data;
  }
}
