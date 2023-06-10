import { Body, Controller, Post } from '@nestjs/common';
import { MatchPostDto } from './match.dto';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post('/create-match')
  createNewMatch(@Body() matchDto: MatchPostDto) {
    try {
      return this.matchService.createMatch(matchDto);
    } catch (error) {
      throw error;
    }
  }

  // @Get('/get-matches-team')
  // async getPlayerId(@Query() team: ParamDto) {
  //   return this.teamService.getMatchesByTeamId(team.id);
  // }
}
