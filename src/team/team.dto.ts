import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class TeamPostDto {
  @ApiProperty({ description: 'Wpisz nazwe klubu' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Wpisz URL logo' })
  @IsString()
  logoUrl: string;
}

export class ParamDto {
  @ApiProperty({ description: 'Wpisz ID klubu' })
  @IsNumber()
  id: number;
}
