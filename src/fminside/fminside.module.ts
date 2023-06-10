import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FminsideController } from './fminside.controller';
import { FminsideService } from './fminside.service';

@Module({
  providers: [FminsideService, PrismaService],
  controllers: [FminsideController],
})
export class FminsideModule {}
