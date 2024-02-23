import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "../services/roles.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RoleEntity } from "../entities/roles.model";
import { RoleDto } from "../dto/role.dto";

@ApiTags('Roles Controller')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {
  }

  @ApiOperation({summary: 'Create new user role'})
  @ApiResponse({status: 200, type: RoleEntity})
  @Post()
  async createUser(@Body() roleDto: RoleDto): Promise<RoleEntity> {
    return await this.rolesService.createRole(roleDto);
  }

  @ApiOperation({summary: 'Get role by role value'})
  @ApiResponse({status: 200, type: [RoleEntity]})
  @Get('/:value')
  async getByValue(@Param('value') value: string): Promise<RoleEntity> {
    return await this.rolesService.getRoleByValue(value);
  }

  @Get()
  async findAll(): Promise<RoleEntity[]> {
    return await this.rolesService.findAll();
  }


}
