import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogPostDto } from './blog.dto';
import { BlogService } from './blog.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('/create-post')
  createNewFminside(@Body() blogDto: BlogPostDto) {
    try {
      return this.blogService.createBlog(blogDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('/get-posts')
  async getPlayerId() {
    return this.blogService.getBlogs();
  }
}
