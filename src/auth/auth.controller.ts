import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ReqWithUser, SignUpModel, TokenObject } from 'src/common/types';
import { JoiValidationPipe } from 'src/common/validation/joi-validation.pipe';
import { AuthService } from './auth.service';
import { signInSchema, signUpSchema } from './auth.validation';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @UsePipes(new JoiValidationPipe(signInSchema))
  async signIn(@Request() req: ReqWithUser): Promise<TokenObject> {
    return this.authService.signUserIn(req.user);
  }

  @Post('/signup')
  @HttpCode(201)
  @UsePipes(new JoiValidationPipe(signUpSchema))
  async signUp(@Body() signUpInfo: SignUpModel): Promise<void> {
    await this.authService.signUserUp(signUpInfo);
  }
}
