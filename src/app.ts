import { NestFactory } from '@nestjs/core';
import { Exports } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(Exports);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    await app.listen(3000);
}
bootstrap();





