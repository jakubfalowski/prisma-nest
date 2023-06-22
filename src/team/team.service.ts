import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamPostDto } from './team.dto';

@Injectable()
export class TeamService {
  constructor(private readonly prismaService: PrismaService) {}

  async createTeam(teamDto: TeamPostDto) {
    return this.prismaService.team.create({
      data: teamDto,
    });
  }

  async getTeams() {
    return await this.prismaService.team.findMany({});
  }

  // async getMatchesByTeamId(id: number) {
  //   const matches = await this.prismaService.matches.findMany({
  //     where: {
  //       id_home: id,
  //     },
  //   });
  //   return matches;
  // }
}
