import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SofascoreController } from './sofascore.controller';
import { SofascoreService } from './sofascore.service';

@Module({
  providers: [SofascoreService, PrismaService],
  controllers: [SofascoreController],
})
export class SofascoreModule {}
