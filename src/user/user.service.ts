import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(userDto: UserDto) {
    return this.prismaService.user.create({
      data: userDto,
    });
  }

  async getUserId(name: string, password: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        name: name,
        password: password,
      },
      select: {
        id: true,
      },
    });
    return user.id;
  }
}
