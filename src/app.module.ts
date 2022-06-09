import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './common/db/db.module';
import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [DbModule, AuthModule, UrlsModule],
})
export class AppModule {}
