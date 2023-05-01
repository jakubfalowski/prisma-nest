import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'Wpisz swoje imie' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Wpisz swoje hasło' })
  @IsString()
  password: string;
}
