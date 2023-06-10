import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ParamDto, TeamPostDto } from './team.dto';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('/create-team')
  createNewTeam(@Body() teamDto: TeamPostDto) {
    try {
      return this.teamService.createTeam(teamDto);
    } catch (error) {
      throw error;
    }
  }

  // @Get('/get-matches-team')
  // async getPlayerId(@Query() team: ParamDto) {
  //   return this.teamService.getMatchesByTeamId(team.id);
  // }
}
