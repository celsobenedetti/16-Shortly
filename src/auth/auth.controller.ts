import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ReqWithUser, TokenObject } from 'src/common/types';
import { SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req: ReqWithUser): Promise<TokenObject> {
    return this.authService.signUserIn(req.user);
  }

  @HttpCode(201)
  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    await this.authService.signUserUp(signUpDto);
  }
}
