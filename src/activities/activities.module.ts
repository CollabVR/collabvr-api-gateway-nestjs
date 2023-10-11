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
						host: '18.223.1.167',
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
