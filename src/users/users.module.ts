import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserEntity } from "./entities/user.model";
import { RoleEntity } from "../roles/entities/roles.model";
import { RolesModule } from "../roles/roles.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([UserEntity, RoleEntity]),
  RolesModule
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
