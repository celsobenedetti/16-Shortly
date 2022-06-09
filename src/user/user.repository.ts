import { Injectable } from '@nestjs/common';
import { DbService } from 'src/common/db/db.service';
import { UserInfo } from 'src/common/types';

@Injectable()
export class UserRepository {
  constructor(private readonly db: DbService) {}

  async findUserByEmail(email: string): Promise<UserInfo> {
    const { rows } = await this.db.query(`SELECT * FROM users WHERE email = $1;`, [
      email,
    ]);
    return rows[0];
  }

  async insertUser(userInfo: UserInfo): Promise<void> {
    const { name, email, password } = userInfo;
    await this.db.query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
      [name, email, password],
    );
  }
}
