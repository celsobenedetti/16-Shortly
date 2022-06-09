import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ReqWithUser, TokenObject } from 'src/common/types';
import { JoiValidationPipe } from 'src/common/validation/joi-validation.pipe';
import { SignUpDto } from './auth.dto';
import { AuthService } from './auth.service';
import { signUpSchema } from './auth.validation';
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
  @UsePipes(new JoiValidationPipe(signUpSchema))
  async signUp(@Body() signUpDto: any): Promise<void> {
    await this.authService.signUserUp(signUpDto);
  }
}
