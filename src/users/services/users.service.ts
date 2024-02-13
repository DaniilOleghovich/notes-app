import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): object {
    return [
      { id: 1, email: 'qwe@gmail.com', password: 'qwerty'},
      { id: 2, email: 'qwe@gmail.com', password: 'qwerty'},
      { id: 3, email: 'qwe@gmail.com', password: 'qwerty'},
    ];
  }
}
