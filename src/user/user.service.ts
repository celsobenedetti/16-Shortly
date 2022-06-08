import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { UserInfo } from 'src/common/types';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async findOneByEmail(email: string): Promise<UserInfo> {
    return this.repository.findUserByEmail(email);
  }

  async create(userInfo: UserInfo): Promise<void> {
    const hashedPassword = hashSync(userInfo.password, 10);
    await this.repository.insertUser({
      ...userInfo,
      password: hashedPassword,
    });
  }
}
