import { Body, Controller, Post } from '@nestjs/common';
import { FutheadPostDto } from './futhead.dto';
import { FutheadService } from './futhead.service';

@Controller('futhead')
export class FutheadController {
  constructor(private readonly futheadService: FutheadService) {}

  @Post('/create-fifa-stats')
  createNewFutheady(@Body() futheadDto: FutheadPostDto) {
    try {
      return this.futheadService.createFuthead(futheadDto);
    } catch (error) {
      throw error;
    }
  }
}
