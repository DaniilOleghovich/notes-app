import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from '../services/users.service';
import { UserEntity } from "../entities/user.model";
import { UserDto } from "../dto/user.dto";

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<UserEntity> {
    return await this.userService.createUser(userDto);
  }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
