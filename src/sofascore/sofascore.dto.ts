import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class SofascorePostDto {
  @ApiProperty({ description: 'Wpisz nazwe' })
  @IsString()
  Name: string;

  @ApiProperty({ description: 'Wpisz drybling' })
  @IsNumber()
  Dribbling: number;

  @ApiProperty({ description: 'Wpisz ilość fauli na zawodniku ' })
  @IsNumber()
  BeingFouled: number;

  @ApiProperty({
    description: 'Wpisz procent wygranych pojedynków powietrznych',
  })
  @IsNumber()
  PercentHeader: number;

  @ApiProperty({ description: 'Wpisz procent wygranych pojedynków po ziemi' })
  @IsNumber()
  PercentGround: number;

  @ApiProperty({ description: 'Wpisz bramki' })
  @IsNumber()
  Goals: number;

  @ApiProperty({ description: 'Wpisz strzały' })
  @IsNumber()
  Shots: number;

  @ApiProperty({ description: 'Wpisz odbiory' })
  @IsNumber()
  Interceptions: number;

  @ApiProperty({ description: 'Wpisz wślizgi' })
  @IsNumber()
  Tackles: number;

  @ApiProperty({ description: 'Wpisz wybicia' })
  @IsNumber()
  Clearances: number;

  @ApiProperty({ description: 'Wpisz asysty' })
  @IsNumber()
  Assists: number;

  @ApiProperty({ description: 'Wpisz kluczowe podania' })
  @IsNumber()
  KeyPasses: number;

  @ApiProperty({ description: 'Wpisz stworzone groźne sytuacje' })
  @IsNumber()
  DangerousSituation: number;

  @ApiProperty({ description: 'Wpisz procent celnych podań' })
  @IsNumber()
  PercentAccuracyPasses: number;

  @ApiProperty({ description: 'Wpisz liczbę minut' })
  @IsNumber()
  Minutes: number;

  @ApiProperty({ description: 'Wpisz średnią ocenę' })
  @IsNumber()
  Rating: number;
}

export class SofascoreGetParamDto {
  @ApiProperty({ description: 'Wpisz imię i nazwisko zawodnika' })
  @IsString()
  name: string;
}
