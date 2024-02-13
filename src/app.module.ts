import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from './notes/notes.module';
import { SwaggerModule } from './common/swagger/swagger.module';
import * as process from 'process';
import { UsersController } from "./users/controllers/users.controller";
import { NotesController } from "./notes/controllers/notes.controller";
import { UsersService } from "./users/services/users.service";
import { NotesService } from "./notes/services/notes.service";

@Module({
  controllers: [UsersController, NotesController],
  providers: [UsersService, NotesService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
    }),
    UsersModule,
    NotesModule,
    SwaggerModule,
  ],
})
export class AppModule {}
