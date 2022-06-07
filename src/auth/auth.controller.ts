import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('/signin')
  signIn(@Body() { email, password }: SignInDto) {
    const result = this.authService.SignIn(email);
    return result;
  }

  @HttpCode(201)
  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto) {
    const result = this.authService.SignUp();
    return result;
  }
}
