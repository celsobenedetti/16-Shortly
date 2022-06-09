import { Injectable } from '@nestjs/common';
import { DbService } from 'src/common/db/db.service';

type UrlInfo = {
  userId: number;
  shortUrl: string;
  url: string;
};

@Injectable()
export class UrlRepository {
  constructor(private readonly db: DbService) {}

  async createShortenedUrl(urlInfo: UrlInfo): Promise<void> {
    const { userId, shortUrl, url } = urlInfo;
    await this.db.query(
      `INSERT INTO urls ("shortUrl", "url", "userId") VALUES ($1, $2, $3);`,
      [shortUrl, url, userId],
    );
  }
}
