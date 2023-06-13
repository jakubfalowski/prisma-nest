import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class FminsidePostDto {
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

export class FminsideGetParamDto {
  @ApiProperty({ description: 'Wpisz statystyke' })
  @IsString()
  stat:
    | 'Overall'
    | 'Pace'
    | 'Shooting'
    | 'Passing'
    | 'Dribbling'
    | 'Defense'
    | 'Physical';

  @ApiProperty({ description: 'Wpisz sortowaną gre' })
  @IsString()
  game: 'futhead' | 'fminside';

  @ApiProperty({ description: 'Wpisz rodzaj sortowania' })
  @IsString()
  sortBy: 'ASC' | 'DESC';
}
