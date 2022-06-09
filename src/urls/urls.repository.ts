import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';
import { DbService } from 'src/common/db/db.service';

type UrlInfo = {
  userId: number;
  shortUrl: string;
  url: string;
};

@Injectable()
export class UrlsRepository {
  constructor(private readonly db: DbService) {}

  async findOneByUrl(url: string): Promise<QueryResult> {
    const { rows } = await this.db.query(`SELECT * FROM urls WHERE url = $1;`, [url]);
    return rows[0];
  }

  async createShortenedUrl(urlInfo: UrlInfo): Promise<void> {
    const { userId, shortUrl, url } = urlInfo;
    await this.db.query(
      `INSERT INTO urls ("shortUrl", "url", "userId") VALUES ($1, $2, $3);`,
      [shortUrl, url, userId],
    );
  }
}
