import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  providers: [BlogService, PrismaService],
  controllers: [BlogController],
})
export class BlogModule {}
