import { Body, Controller, Post } from '@nestjs/common';
import { SofascorePostDto } from './sofascore.dto';
import { SofascoreService } from './sofascore.service';

@Controller('sofascore')
export class SofascoreController {
  constructor(private readonly sofascoreService: SofascoreService) {}

  @Post('/create-sofa-stats')
  createSofascore(@Body() sofascoreDto: SofascorePostDto) {
    try {
      return this.sofascoreService.createSofascore(sofascoreDto);
    } catch (error) {
      throw error;
    }
  }
}
