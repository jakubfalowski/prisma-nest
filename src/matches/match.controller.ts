import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  ParamBetimateDto,
  ParamDto,
  ParamIdDto,
  ParamRoundDto,
} from 'src/matches/match.dto';
import { MatchPostDto } from './match.dto';
import { MatchService } from './match.service';

@ApiTags('Matches')
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
  async getTeamId(@Query() match: ParamDto) {
    return this.matchService.getMatchesByTeamId(match.teamId);
  }

  @Get('/get-home-matches-team')
  async getHomeTeamId(@Query() match: ParamDto) {
    return this.matchService.getHomeMatchesByTeamId(match.teamId);
  }

  @Get('/get-away-matches-team')
  async getAwayTeamId(@Query() match: ParamDto) {
    return this.matchService.getAwayMatchesByTeamId(match.teamId);
  }

  @Get('/get-all-matches')
  async getMatches(@Query() match: ParamRoundDto) {
    return this.matchService.getAllMatches(match.round);
  }

  @Get('/get-matches-by-id')
  async getMatch(@Query() match: ParamIdDto) {
    return this.matchService.getMatchesById(match.id);
  }

  @Get('/get-betimate-by-teams')
  async getBetimate(@Query() teams: ParamBetimateDto) {
    return this.matchService.getBetimateFromTeams(teams.home, teams.away);
  }
}
