import { Body, Controller, Post } from '@nestjs/common';
import { FminsidePostDto } from './fminside.dto';
import { FminsideService } from './fminside.service';

@Controller('fminside')
export class FminsideController {
  constructor(private readonly fminsideService: FminsideService) {}

  @Post('/create-fm-stats')
  createNewFminside(@Body() fminsideDto: FminsidePostDto) {
    try {
      return this.fminsideService.createFminside(fminsideDto);
    } catch (error) {
      throw error;
    }
  }
}
