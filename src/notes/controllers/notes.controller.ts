import { Controller, Injectable } from "@nestjs/common";
import { NotesService } from "../services/notes.service";
import { NoteDto } from "../dto/note.dto";
import { NoteEntity } from "../entities/note.model";

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {
  }

  async createNote(noteDto: NoteDto): Promise<NoteEntity> {
    return await this.notesService.createNote(noteDto);
  }

  async getAllNotes(): Promise<NoteEntity[]> {
    return await this.notesService.getAllNotes();
  }


}
