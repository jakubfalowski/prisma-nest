import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class FutheadPostDto {
  @ApiProperty({ description: 'Wpisz nazwe' })
  @IsString()
  Name: string;

  @ApiProperty({ description: 'Wpisz ocena ogólną' })
  @IsNumber()
  Overall: number;

  @ApiProperty({ description: 'Wpisz szybkość ' })
  @IsNumber()
  Pace: number;

  @ApiProperty({ description: 'Wpisz strzały' })
  @IsNumber()
  Shooting: number;

  @ApiProperty({ description: 'Wpisz podania' })
  @IsNumber()
  Passing: number;

  @ApiProperty({ description: 'Wpisz drybling' })
  @IsNumber()
  Dribbling: number;

  @ApiProperty({ description: 'Wpisz defensywe' })
  @IsNumber()
  Defense: number;

  @ApiProperty({ description: 'Wpisz fizyczność' })
  @IsNumber()
  Physical: number;
}
