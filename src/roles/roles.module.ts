import { Module } from "@nestjs/common";
import { RolesController } from "./controllers/roles.controller";
import { RolesService } from "./services/roles.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { RoleEntity } from "./entities/roles.model";
import { UserEntity } from "../users/entities/user.model";
import { UserRolesEntity } from "./entities/user-roles.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([RoleEntity, UserEntity, UserRolesEntity])],
  exports: [RolesService]

})
export class RolesModule {}
