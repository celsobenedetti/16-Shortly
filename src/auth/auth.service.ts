import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInfo } from 'src/common/types';
import { UserService } from 'src/user/user.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserInfo> {
    const user = await this.userService.findOneByEmail(email);
    if (!user || !compareSync(password, user.password)) return null;
    return user;
  }

  async signUserIn(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async signUserUp(userInfo: UserInfo) {
    const existingUser = await this.userService.findOneByEmail(userInfo.email);
    if (existingUser) throw new ConflictException();

    return this.userService.create(userInfo);
  }
}
