import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CartPostDto {
  @ApiProperty({ description: 'Wpisz ID zawodnika' })
  @IsNumber()
  id_player: number;

  @ApiProperty({ description: 'Wpisz ID użytkownika', required: false })
  @IsOptional()
  @IsNumber()
  id_user: number;

  @ApiProperty({ description: 'Wpisz nazwe zawodnika' })
  @IsString()
  activation_code: string;
}

export class CardPatchDto {
  @ApiProperty({ description: 'Wpisz nazwe zawodnika' })
  @IsString()
  activation_code: string;

  @ApiProperty({ description: 'Wpisz ID użytkownika' })
  @IsNumber()
  id_user: number;
}

export class ParamDto {
  @ApiProperty({ description: 'Wpisz ID użytkownika' })
  @IsString()
  id_user: number;
}
