import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { ShortUrlObj } from 'src/common/types';
import { UrlRepository } from './urls.repository';

@Injectable()
export class UrlsService {
  constructor(private repository: UrlRepository) {}

  async createShortenedUrl(userId: number, url: string): Promise<ShortUrlObj> {
    const shortUrl = nanoid(8);
    await this.repository.createShortenedUrl({ userId, shortUrl, url });
    return { shortUrl };
  }
}
