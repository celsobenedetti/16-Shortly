import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module';
import helmet from 'helmet';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  await app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}
bootstrap();
