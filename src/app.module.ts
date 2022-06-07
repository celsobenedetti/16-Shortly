import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { DbModule } from './db/db.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [DbModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
