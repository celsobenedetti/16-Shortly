import { Module } from '@nestjs/common';
import { UrlsController } from './urls.controller';
import { UrlsRepository } from './urls.repository';
import { UrlsService } from './urls.service';

@Module({
  controllers: [UrlsController],
  providers: [UrlsService, UrlsRepository],
})
export class UrlsModule {}
