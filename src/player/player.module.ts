import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';

@Module({
  providers: [PlayerService, PrismaService],
  controllers: [PlayerController],
})
export class PlayerModule {}
