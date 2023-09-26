import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { MatchPostDto } from './match.dto';

@Injectable()
export class MatchService {
  constructor(private readonly prismaService: PrismaService) {}

  async createMatch(matchDto: MatchPostDto) {
    const data: Prisma.MatchesCreateInput = {
      homeTeam:
        matchDto.id_home !== undefined
          ? { connect: { id: matchDto.id_home } }
          : undefined,
      awayTeam: { connect: { id: matchDto.id_away } },
      homeGoals: matchDto.homeGoals,
      awayGoals: matchDto.awayGoals,
      result: matchDto.result,
      date: matchDto.date,
      round: matchDto.round,
    };

    return this.prismaService.matches.create({
      data: data,
    });
  }

  async getAllMatches(userRound: string) {
    const matches = await this.prismaService.matches.findMany({
      where: {
        round: userRound,
      },
    });

    matches.sort((a, b) => {
      const roundA = parseInt(a.round);
      const roundB = parseInt(b.round);
      return roundB - roundA;
    });

    return matches;
  }

  async getMatchesByTeamId(teamId: string) {
    const parsedTeamId = parseInt(teamId);
    const data = await this.prismaService.$queryRawUnsafe(
      `SELECT matches.*, t1.logoUrl AS logo_home, t2.logoUrl AS logo_away
        FROM matches
        JOIN team AS t1 ON matches.id_home = t1.id
        JOIN team AS t2 ON matches.id_away = t2.id
        WHERE (matches.id_home = ${parsedTeamId} OR matches.id_away = ${parsedTeamId})
        ORDER BY matches.startYear DESC, CAST(matches.round AS UNSIGNED) DESC`,
    );

    return data;
  }

  async getHomeMatchesByTeamId(teamId: string) {
    const parsedTeamId = parseInt(teamId);
    const matches = await this.prismaService.$queryRawUnsafe(
      `SELECT matches.*, t1.logoUrl AS logo_home, t2.logoUrl AS logo_away
        FROM matches
        JOIN team AS t1 ON matches.id_home = t1.id
        JOIN team AS t2 ON matches.id_away = t2.id
        WHERE matches.id_home = ${parsedTeamId}
        ORDER BY matches.startYear DESC, CAST(matches.round AS UNSIGNED) DESC`,
    );

    return matches;
  }

  async getAwayMatchesByTeamId(teamId: string) {
    const parsedTeamId = parseInt(teamId);
    const matches = await this.prismaService.$queryRawUnsafe(
      `SELECT matches.*, t1.logoUrl AS logo_home, t2.logoUrl AS logo_away
        FROM matches
        JOIN team AS t1 ON matches.id_home = t1.id
        JOIN team AS t2 ON matches.id_away = t2.id
        WHERE matches.id_away = ${parsedTeamId}
        ORDER BY matches.startYear DESC, CAST(matches.round AS UNSIGNED) DESC`,
    );

    return matches;
  }

  async getMatchesById(Id: string) {
    const data = await this.prismaService.$queryRawUnsafe(
      `SELECT *
        FROM karty.matches WHERE id = ${Id} LIMIT 1`,
    );
    return data[0];
  }

  async getBetimateFromTeams(home: string, away: string) {
    const data = await this.prismaService.$queryRawUnsafe(
      `SELECT * FROM karty.betimate WHERE homeTeam = '${home}' AND awayTeam = '${away}'`,
    );
    return data[0];
  }
}
