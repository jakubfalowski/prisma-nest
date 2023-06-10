import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ParamDto } from 'src/matches/match.dto';
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

  @Get('/get-matches-team')
  async getPlayerId(@Query() match: ParamDto) {
    return this.matchService.getMatchesByTeamId(match.teamId);
  }
}
