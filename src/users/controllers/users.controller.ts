import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from '../services/users.service';
import { UserEntity } from "../entities/user.model";
import { UserDto } from "../dto/user.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Users Controller')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({summary: 'Create new user'})
  @ApiResponse({status: 200, type: UserEntity})
  @Post()
  async createUser(@Body() userDto: UserDto): Promise<UserEntity> {
    return await this.userService.createUser(userDto);
  }

  @ApiOperation({summary: 'Get users list'})
  @ApiResponse({status: 200, type: [UserEntity]})
  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
