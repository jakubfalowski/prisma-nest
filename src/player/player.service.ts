import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlayerPostDto } from './player.dto';

@Injectable()
export class PlayerService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPlayer(playerDto: PlayerPostDto) {
    return this.prismaService.player.create({
      data: playerDto,
    });
  }

  async getPlayer(name: string) {
    const player = await this.prismaService.player.findFirst({
      where: {
        name: name,
      },
    });
    return player;
  }
}
