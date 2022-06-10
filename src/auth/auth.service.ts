import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { TokenObject, UserInfo, UserModel } from 'src/common/types';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  //used by local.strategy.ts on local email/password auth
  async validateUser(email: string, password: string): Promise<UserInfo> {
    const user = await this.userService.findOneByEmail(email);
    if (!user || !compareSync(password, user.password)) return null;
    return user;
  }

  async signUserIn(user: UserModel): Promise<TokenObject> {
    const payload = { name: user.name, email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async signUserUp(userInfo: UserInfo): Promise<void> {
    const existingUser = await this.userService.findOneByEmail(userInfo.email);
    if (existingUser) throw new ConflictException();

    await this.userService.create(userInfo);
  }
}
