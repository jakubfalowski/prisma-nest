import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class MatchPostDto {
  @ApiProperty({ description: 'Wpisz ID gospodarza' })
  @IsNumber()
  id_home?: number | undefined;

  @ApiProperty({ description: 'Wpisz ID gościa' })
  @IsNumber()
  id_away: number | undefined;

  @ApiProperty({ description: 'Wpisz liczbe goli gospodarza' })
  @IsNumber()
  homeGoals: number;

  @ApiProperty({ description: 'Wpisz liczbe goli gościa' })
  @IsNumber()
  awayGoals: number;

  @ApiProperty({ description: 'Wpisz zwycięzce 1/X/2 ' })
  @IsString()
  result: string;

  @ApiProperty({ description: 'Wpisz date ' })
  @IsString()
  date: string;

  @ApiProperty({ description: 'Wpisz kolejke ' })
  @IsString()
  round: string;
}

export class ParamDto {
  @ApiProperty({ description: 'Wpisz ID druzyny' })
  @IsString()
  teamId: string;
}

export class ParamRoundDto {
  @ApiProperty({ description: 'Wpisz kolejke' })
  @IsString()
  round: string;
}

export class ParamIdDto {
  @ApiProperty({ description: 'Wpisz ID meczu' })
  @IsString()
  id: string;
}
