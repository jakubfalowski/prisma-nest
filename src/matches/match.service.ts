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
    const matches = await this.prismaService.matches.findMany({
      where: {
        OR: [{ id_home: parsedTeamId }, { id_away: parsedTeamId }],
      },
    });

    matches.sort((a, b) => {
      const roundA = parseInt(a.round);
      const roundB = parseInt(b.round);
      return roundB - roundA;
    });

    return matches;
  }

  async getHomeMatchesByTeamId(teamId: string) {
    const parsedTeamId = parseInt(teamId);
    const matches = await this.prismaService.matches.findMany({
      where: { id_home: parsedTeamId },
    });

    matches.sort((a, b) => {
      const roundA = parseInt(a.round);
      const roundB = parseInt(b.round);
      return roundB - roundA;
    });

    return matches;
  }

  async getAwayMatchesByTeamId(teamId: string) {
    const parsedTeamId = parseInt(teamId);
    const matches = await this.prismaService.matches.findMany({
      where: { id_away: parsedTeamId },
    });

    matches.sort((a, b) => {
      const roundA = parseInt(a.round);
      const roundB = parseInt(b.round);
      return roundB - roundA;
    });

    return matches;
  }

  async getMatchesById(Id: string) {
    const match = await this.prismaService.matches.findFirst({
      where: {
        id: parseInt(Id),
      },
    });

    return match;
  }
}
