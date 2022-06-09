import { Injectable } from '@nestjs/common';
import { DbService } from 'src/common/db/db.service';
import { UrlModel } from 'src/common/types';

interface IUrlInfo {
  userId: number;
  shortUrl: string;
  url: string;
}

@Injectable()
export class UrlsRepository {
  constructor(private readonly db: DbService) {}

  async findOneById(urlId: number): Promise<UrlModel> {
    const { rows } = await this.db.query(`SELECT * FROM urls WHERE id = $1;`, [urlId]);
    return rows[0];
  }

  async createShortenedUrl(urlInfo: IUrlInfo): Promise<void> {
    const { userId, shortUrl, url } = urlInfo;
    await this.db.query(
      `INSERT INTO urls ("shortUrl", "url", "userId") VALUES ($1, $2, $3);`,
      [shortUrl, url, userId],
    );
  }

  async deleteUrlById(urlId: number): Promise<void> {
    await this.db.query(`DELETE FROM urls WHERE id = $1;`, [urlId]);
  }
}
