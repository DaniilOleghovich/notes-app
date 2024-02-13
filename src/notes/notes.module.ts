import { Module } from "@nestjs/common";
import { NotesController } from "./controllers/notes.controller";
import { NotesService } from "./services/notes.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { NoteEntity } from "./entities/note.model";

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [SequelizeModule.forFeature([NoteEntity])],
})
export class NotesModule {}
