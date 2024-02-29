import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserEntity } from "../entities/user.model";
import { UserDto } from "../dto/user.dto";
import { RolesService } from "../../roles/services/roles.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity) private userRepository: typeof UserEntity,
    private roleService: RolesService,
  ) {}

  async createUser(userDto: UserDto): Promise<UserEntity> {
    const  user = await this.userRepository.create(userDto);
    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Error creating user!");
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }
}
