import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './common/db/db.module';

@Module({
  imports: [DbModule, AuthModule],
})
export class AppModule {}
