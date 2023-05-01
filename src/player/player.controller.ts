import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PlayerPostDto, PlayerGetDto } from './player.dto';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('/create-player')
  createNewPlayer(@Body() playerDto: PlayerPostDto) {
    try {
      return this.playerService.createPlayer(playerDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('/get-player')
  async getPlayerId(@Query() player: PlayerGetDto) {
    return this.playerService.getPlayer(player.name);
  }
}
