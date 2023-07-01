import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamPostDto } from './team.dto';
import { TeamService } from './team.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Team')
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

  @Get('/get-teams')
  async getPlayerId() {
    return this.teamService.getTeams();
  }

  // @Get('/get-matches-team')
  // async getPlayerId(@Query() team: ParamDto) {
  //   return this.teamService.getMatchesByTeamId(team.id);
  // }
}
