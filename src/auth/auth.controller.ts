import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req) {
    return this.authService.signUserIn(req.user);
  }

  @HttpCode(201)
  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    await this.authService.signUserUp(signUpDto);
  }
}
