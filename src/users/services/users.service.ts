import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { UserEntity } from "../entities/user.model";
import { UserDto } from "../dto/user.dto";
import { Sequelize } from "sequelize-typescript";
import { RolesService } from "../../roles/services/roles.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity) private userRepository: typeof UserEntity,
    private roleService: RolesService,
    private sequelize: Sequelize,
  ) {}

  async createUser(userDto: UserDto): Promise<UserEntity> {
    return this.sequelize.transaction(async (transaction) => {
      try {
        const  user = await this.userRepository.create(userDto, {transaction});
        const role = await this.roleService.getRoleByValue('USER');
        if (!user) {
          await transaction.rollback();
          throw new Error("User isn't created!");
        }
        await user.$set('roles', [role.id], { transaction });
          await transaction.commit();
        return user;
      } catch (e) {
          await transaction.rollback();
        console.log(e);
        throw new Error("Error creating user!");
      }
    })

  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }
}
