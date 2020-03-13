import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from "firebase-admin";
import * as serviceAccount from '../config/firebaseServiceAccount.json';

async function bootstrap() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: "https://order-helper-2fdd0.firebaseio.com"
  });
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
