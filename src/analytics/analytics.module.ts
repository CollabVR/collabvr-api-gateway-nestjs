import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
	imports: [
		ClientsModule.registerAsync([
			{
				name: 'ANALYTICS_SERVICE',
				useFactory: (configService: ConfigService) => ({
					transport: Transport.TCP,
					options: {
						host: configService.get<string>('ANALYTICS_SERVICE_HOST'),
						port: configService.get<number>('ANALYTICS_SERVICE_PORT'),
					},
				}),
				inject: [ConfigService],
			},
		]),
	],
	controllers: [AnalyticsController],
	providers: [],
})
export class AnalyticsModule {}
