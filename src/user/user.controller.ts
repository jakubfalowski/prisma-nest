import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  createNewUser(@Body() userDto: UserDto) {
    try {
      return this.userService.createUser(userDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('/login')
  async getUserId(@Query() user: UserDto) {
    return this.userService.getUserId(user.name, user.password);
  }
}
