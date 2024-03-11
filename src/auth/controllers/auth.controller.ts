import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "../../users/dto/user.dto";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "../services/auth.service";

@ApiTags('Authorization and Registration Controller')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto: UserDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: UserDto) {
    return this.authService.registration(userDto);
  }
}
