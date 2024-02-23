import { ApiProperty } from "@nestjs/swagger";

export class RoleDto {

  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  readonly role: string;

  @ApiProperty({ example: 'Role: ADMIN', description: 'Role description' })
  readonly description: string;

}

