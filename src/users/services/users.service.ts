import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { UserEntity } from "../entities/user.model";
import { UserDto } from "../dto/user.dto";
import { Sequelize } from "sequelize-typescript";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity) private userRepository: typeof UserEntity,
    private sequelize: Sequelize,
  ) {}

  async createUser(userDto: UserDto): Promise<UserEntity> {
    return this.sequelize.transaction(async (transaction) => {
      try {
        const  user = await this.userRepository.create(userDto, {transaction});
        await transaction.commit();
        return user;
      } catch (e) {
        await transaction.rollback();
        throw new Error("Error creating user!");
      }
    })

  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }
}
