import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  FminsideGetParamDto,
  FminsideGetStatParamDto,
  FminsidePostDto,
} from './fminside.dto';
import { FminsideService } from './fminside.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Football Manager')
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

  @Get('/get-compare-data')
  async getNewCompareData(@Query() params: FminsideGetParamDto) {
    return this.fminsideService.getCompareData(params);
  }

  @Get('/get-average-ratings')
  async getNewAverageRatings() {
    return this.fminsideService.getAverageRatings();
  }

  @Get('/get-club-data')
  async getNewClubData(@Query() params: FminsideGetStatParamDto) {
    return this.fminsideService.getClubData(params);
  }
}
