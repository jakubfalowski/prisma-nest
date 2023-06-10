import { Body, Controller, Post } from '@nestjs/common';
import { PlayerPostDto } from './player.dto';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('/create-player')
  createNewMatch(@Body() playerDto: PlayerPostDto) {
    try {
      return this.playerService.createPlayer(playerDto);
    } catch (error) {
      throw error;
    }
  }
}
