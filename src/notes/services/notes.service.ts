import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { NoteEntity } from "../entities/note.model";
import { NoteDto } from "../dto/note.dto";

@Injectable()
export class NotesService {
  constructor(@InjectModel(NoteEntity) private notesRepository: typeof NoteEntity) {
  }

  async createNote(noteDto: NoteDto): Promise<NoteEntity> {
    return await this.notesRepository.create(noteDto);
  }

  async getAllNotes(): Promise<NoteEntity[]> {
    return await this.notesRepository.findAll();
  }


}
