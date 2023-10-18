import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
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
						host: '18.227.111.128',
						port: 3300,
					},
				}),
				inject: [ConfigService],
			},
		]),
	],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
