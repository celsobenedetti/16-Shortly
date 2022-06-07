import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { DbModule } from './db/db.module';

@Module({
  imports: [DbModule],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
