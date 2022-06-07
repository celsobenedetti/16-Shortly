import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  async SignIn(email: string) {
    return this.repository.findUserByEmail(email);
  }

  async SignUp() {
    return 'Sign up service';
  }
}
