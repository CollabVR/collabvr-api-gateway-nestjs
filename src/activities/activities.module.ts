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
						host: '3.137.185.11',
						port: 3200,
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
