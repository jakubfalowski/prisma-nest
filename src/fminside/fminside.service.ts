import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FminsidePostDto } from './fminside.dto';

@Injectable()
export class FminsideService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFminside(fminsideDto: FminsidePostDto) {
    return this.prismaService.fminside.create({
      data: fminsideDto,
    });
  }
}
