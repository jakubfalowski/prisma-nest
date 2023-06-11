import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BlogPostDto {
  @ApiProperty({ description: 'Wpisz tytuł' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Wpisz opis' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Wpisz date' })
  @IsString()
  date: string;

  @ApiProperty({ description: 'Wpisz link do zdjęcia' })
  @IsString()
  imgUrl: string;
}
