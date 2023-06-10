import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FutheadController } from './futhead.controller';
import { FutheadService } from './futhead.service';

@Module({
  providers: [FutheadService, PrismaService],
  controllers: [FutheadController],
})
export class FutheadModule {}
