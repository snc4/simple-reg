import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Reg/Login App')
    .setDescription('Simple app for register/login/read users')
    .addBearerAuth(
      {
        description: 'Enter jwt token',
        name: 'Authorization',
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        in: 'Header',
      },
      'authorization',
    )
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
