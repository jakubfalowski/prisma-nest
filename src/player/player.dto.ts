import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class PlayerPostDto {
  @ApiProperty({ description: 'Wpisz imie zawodnika ' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Wpisz link do zdjęcia twarzy' })
  @IsString()
  faceUrl: string;

  @ApiProperty({ description: 'Wpisz nazwe klubu ' })
  @IsString()
  Club: string;

  @ApiProperty({ description: 'Wpisz link do zdjęcia klubu ' })
  @IsString()
  ClubUrl: string;

  @ApiProperty({ description: 'Wpisz nazwe kraju ' })
  @IsString()
  nation: string;

  @ApiProperty({ description: 'Wpisz link do zdjęcia kraju ' })
  @IsString()
  nationUrl: string;

  @ApiProperty({ description: 'Wpisz ID zawodnika w statystykach FIFY' })
  @IsNumber()
  id_fifa?: number | undefined;

  @ApiProperty({
    description: 'Wpisz ID zawodnika w statystykach Football Managera',
  })
  @IsNumber()
  id_fm?: number | undefined;

  @ApiProperty({ description: 'Wpisz ID zawodnika w statystykach Sofascore' })
  @IsNumber()
  id_sofascore?: number | undefined;
}
