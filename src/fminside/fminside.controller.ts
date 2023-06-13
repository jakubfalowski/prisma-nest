import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FminsideGetParamDto, FminsidePostDto } from './fminside.dto';
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

  @Get('/get-compare-data')
  async getNewCompareData(@Query() params: FminsideGetParamDto) {
    return this.fminsideService.getCompareData(params);
  }
}
