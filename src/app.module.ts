import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { DbModule } from './db/db.module';

@Module({
  imports: [DbModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
