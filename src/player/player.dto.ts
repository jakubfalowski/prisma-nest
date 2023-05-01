import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class PlayerPostDto {
  @ApiProperty({ description: 'Wpisz imie zawodnika' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Wpisz liczbę oceny defensywy' })
  @IsNumber()
  defensive: number;

  @ApiProperty({ description: 'Wpisz liczbę oceny pomocy' })
  @IsNumber()
  middle: number;

  @ApiProperty({ description: 'Wpisz liczbę oceny ataku' })
  @IsNumber()
  attack: number;
}

export class PlayerGetDto {
  @ApiProperty({ description: 'Wpisz nazwe zawodnika' })
  @IsString()
  name: string;
}
