import { Controller, Post } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Controller()
export class AuthController {
  constructor(private readonly dbService: DbService) {}

  @Post('/signin')
  signIn(): string {
    this.dbService.query('SELECT * FROM users;', []);
    return 'signin in...';
  }

  @Post('/signup')
  signUp(): string {
    return 'signup up...';
  }
}
