import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { NotesModule } from "./notes/notes.module";
import { SwaggerModule } from "./common/swagger/swagger.module";
import * as process from "process";
import { UserEntity } from "./users/entities/user.model";
import { NoteEntity } from "./notes/entities/note.model";
import { RolesModule } from './roles/roles.module';
import { RoleEntity } from "./roles/entities/roles.model";
import { UserRolesEntity } from "./roles/entities/user-roles.model";
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserEntity, RoleEntity, UserRolesEntity, NoteEntity],
      autoLoadModels: true,
    }),
    UsersModule,
    NotesModule,
    SwaggerModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule {}
