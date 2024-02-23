import { Injectable } from '@nestjs/common';
import { RoleEntity } from "../entities/roles.model";
import { RoleDto } from "../dto/role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { where } from "sequelize";

@Injectable()
export class RolesService {

  constructor(@InjectModel(RoleEntity) private roleRepository: typeof RoleEntity) {
  }

  async createRole(roleDto: RoleDto): Promise<RoleEntity> {
    return this.roleRepository.create(roleDto);
  }

  async getRoleByValue(value: string): Promise<RoleEntity> {
    return this.roleRepository.findOne({where:
        {
          role: value
        }
    })
  }

  async findAll(): Promise<RoleEntity[]> {
    return await this.roleRepository.findAll();
  }

}
