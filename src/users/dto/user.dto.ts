import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

  @ApiProperty({example: 'newUser', description: 'User login. Must be unique!'})
  readonly login: string;

  @ApiProperty({example: 'Bob', description: 'User firstname'})
  readonly firstname: string;

  @ApiProperty({example: 'Marley', description: 'User lastname'})
  readonly lastname: string;

  @ApiProperty({example: 'bobmarley@gmail.com', description: 'User email. Must be unique!'})
  readonly email: string;

  @ApiProperty({example: 'password', description: 'User password'})
  readonly password: string;
}
