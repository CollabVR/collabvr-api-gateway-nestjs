import { Module } from '@nestjs/common';
import { ActivitiesController } from './activities.controller';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
	imports: [
		ClientsModule.registerAsync([
			{
				name: 'ACTIVITY_SERVICE',
				useFactory: (configService: ConfigService) => ({
					transport: Transport.TCP,
					options: {
						host: configService.get<string>('ACTIVITY_SERVICE_HOST'),
						port: configService.get<number>('ACTIVITY_SERVICE_PORT'),
					},
				}),
				inject: [ConfigService],
			},
		]),
	],
	controllers: [ActivitiesController],
	providers: [],
})
export class ActivitiesModule {}
