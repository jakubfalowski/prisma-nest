import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SofascorePostDto } from './sofascore.dto';

@Injectable()
export class SofascoreService {
  constructor(private readonly prismaService: PrismaService) {}

  async createSofascore(sofascoreDto: SofascorePostDto) {
    return this.prismaService.sofascore.create({
      data: sofascoreDto,
    });
  }
}
