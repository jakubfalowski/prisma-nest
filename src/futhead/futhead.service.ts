import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FutheadPostDto } from './futhead.dto';

@Injectable()
export class FutheadService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFuthead(futheadDto: FutheadPostDto) {
    return this.prismaService.futhead.create({
      data: futheadDto,
    });
  }
}
