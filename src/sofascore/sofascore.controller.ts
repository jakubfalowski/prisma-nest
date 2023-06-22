import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SofascoreGetParamDto, SofascorePostDto } from './sofascore.dto';
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

  @Get('/get-players-all-data')
  async getNewCompareData(@Query() params: SofascoreGetParamDto) {
    return this.sofascoreService.getCompareData(params);
  }

  @Get('/get-max-ratings')
  async getNewMaxRatings() {
    return this.sofascoreService.getMaxRatings();
  }
}
