import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { IUrlResult, ShortUrlObj } from 'src/common/types';
import { UrlsRepository } from './urls.repository';

@Injectable()
export class UrlsService {
  constructor(private repository: UrlsRepository) {}

  async createShortenedUrl(userId: number, url: string): Promise<ShortUrlObj> {
    const shortUrl = nanoid(8);
    await this.repository.createShortenedUrl({ userId, shortUrl, url });
    return { shortUrl };
  }

  async findOne(urlId: number): Promise<IUrlResult> {
    const urlInfo = await this.repository.findOneById(urlId);
    if (!urlInfo) throw new NotFoundException();

    const { id, shortUrl, url } = urlInfo;
    return { id, shortUrl, url };
  }

  async deleteOne(urlId: number, userId: number): Promise<void> {
    const urlInfo = await this.repository.findOneById(urlId);

    if (!urlInfo) throw new NotFoundException('Url not found');
    if (urlInfo.userId !== userId)
      throw new UnauthorizedException('Url does not belong to user');

    await this.repository.deleteUrlById(urlId);
  }

  async updateVisitCount(shortUrl: string): Promise<string> {
    const urlInfo = await this.repository.findOneByShortUrl(shortUrl);
    if (!urlInfo) throw new NotFoundException('Url not found');

    await this.repository.updateVisitCount(urlInfo.id);
    return urlInfo.url;
  }
}
