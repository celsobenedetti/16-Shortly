import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly db: DbService) {}

  async findUserByEmail(email: string) {
    const { rows } = await this.db.query(
      `SELECT * FROM users WHERE email = $1;`,
      [email],
    );
    return rows[0];
  }
}
