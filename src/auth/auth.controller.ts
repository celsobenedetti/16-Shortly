import { Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  @Post('/signin')
  signIn(): string {
    return 'signin in...';
  }

  @Post('/signup')
  signUp(): string {
    return 'signup up...';
  }
}
