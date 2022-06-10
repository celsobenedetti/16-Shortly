import { Injectable } from '@nestjs/common';
import { DbService } from 'src/common/db/db.service';
import { UserInfo, UserUrlInfo } from 'src/common/types';

@Injectable()
export class UserRepository {
  constructor(private readonly db: DbService) {}

  async findUserByEmail(email: string): Promise<UserInfo> {
    const { rows } = await this.db.query(`SELECT * FROM users WHERE email = $1;`, [
      email,
    ]);
    return rows[0];
  }

  async findUserInfo(userId: number): Promise<UserUrlInfo> {
    const { rows } = await this.db.query(
      `SELECT us.id, us.name, SUM(ur."visitCount") as "visitCount",
      json_agg(json_build_object(
        'id', ur.id,
        'shortUrl', ur."shortUrl",
        'url', ur.url,
        'visitCount', ur."visitCount"
      )) as "shortenedUrls"
      FROM users us LEFT JOIN urls ur  
      ON ur."userId" = us.id
      WHERE us.id = $1
      GROUP BY us.id;
      `,
      [userId],
    );
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
