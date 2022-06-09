import { Module } from '@nestjs/common';
import { UrlsController } from './urls.controller';
import { UrlRepository } from './urls.repository';
import { UrlsService } from './urls.service';

@Module({
  controllers: [UrlsController],
  providers: [UrlsService, UrlRepository],
})
export class UrlsModule {}
