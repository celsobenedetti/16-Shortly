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
import { AuthService } from './auth.service';
import { signInSchema, signUpSchema } from './auth.validation';
import { LocalAuthGuard } from './guards/local-auth.guard';

interface SignInModel {
  email: string;
  password: string;
}

interface SignUpModel extends SignInModel {
  name: string;
  confirmPassword: string;
}

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @UsePipes(new JoiValidationPipe(signInSchema))
  async signIn(
    @Body() _body: SignInModel,
    @Request() req: ReqWithUser,
  ): Promise<TokenObject> {
    return this.authService.signUserIn(req.user);
  }

  @Post('/signup')
  @UsePipes(new JoiValidationPipe(signUpSchema))
  async signUp(@Body() signUpInfo: SignUpModel): Promise<void> {
    await this.authService.signUserUp(signUpInfo);
  }
}
