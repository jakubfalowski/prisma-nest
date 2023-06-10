import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlayerPostDto } from './player.dto';

@Injectable()
export class PlayerService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPlayer(playerDto: PlayerPostDto) {
    const data: Prisma.PlayerCreateInput = {
      fmStat:
        playerDto.id_fm !== undefined
          ? { connect: { id: playerDto.id_fm } }
          : undefined,
      fifaStat:
        playerDto.id_fifa !== undefined
          ? { connect: { id: playerDto.id_fifa } }
          : undefined,
      sofaStat:
        playerDto.id_sofascore !== undefined
          ? { connect: { id: playerDto.id_sofascore } }
          : undefined,
      name: playerDto.name,
      faceUrl: playerDto.faceUrl,
      nation: playerDto.nation,
      nationUrl: playerDto.nationUrl,
      Club: playerDto.Club,
      ClubUrl: playerDto.ClubUrl,
    };

    return this.prismaService.player.create({
      data: data,
    });
  }
}
