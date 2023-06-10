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

  async getMatchesByTeamId(id: number) {
    const team = await this.prismaService.team.findMany({
      where: {
        id: id,
      },
    });
    return team;
  }
}
