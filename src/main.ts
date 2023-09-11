import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: { origin: 'http://localhost:4200' },
	});

	// binds ValidationPipe to the entire application
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);
	// apply transform to all responses
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
	// app.useGlobalFilters(new RpcExceptionToHttpExceptionFilter());
	const swaggerConfig = new DocumentBuilder()
		.setTitle('Collab VR API Gateway Documentation')
		.setDescription('API Description')
		.setVersion('1.0')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup('api', app, document);

	const configService = app.get(ConfigService);
	const port = configService.get<number>('PORT');
	await app.listen(port, () => console.log(`Running in port ${port}`));
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
