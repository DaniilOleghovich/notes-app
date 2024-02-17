import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { UserEntity } from "../entities/user.model";
import { UserDto } from "../dto/user.dto";
import { Sequelize } from "sequelize";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity) private userRepository: typeof UserEntity,
    private readonly sequelize: Sequelize,
  ) {}

  async createUser(userDto: UserDto): Promise<UserEntity> {
    return this.sequelize.transaction(async (transaction) => {
      const existingUser = await this.userRepository.findOne({
        where: {
          login: userDto.login,
          email: userDto.email,
        },
        transaction
      });

      if (existingUser) {
        throw new Error("User already exists!");
      }
      return await this.userRepository.create(userDto, {transaction});
    })
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }
}
