import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDto } from "../../users/dto/user.dto";
import { UsersService } from "../../users/services/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService,
              private jwtService: JwtService) {
  }

  async login(@Body() userDto: UserDto) {
  }

  async registration(@Body() userDto: UserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException('User with this email already exists!', HttpStatus.BAD_REQUEST);
    }
  }
}
