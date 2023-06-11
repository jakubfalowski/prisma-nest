import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogPostDto } from './blog.dto';

@Injectable()
export class BlogService {
  constructor(private readonly prismaService: PrismaService) {}

  async createBlog(blogDto: BlogPostDto) {
    return this.prismaService.blog.create({
      data: blogDto,
    });
  }

  async getBlogs() {
    return await this.prismaService.blog.findMany({});
  }
}
