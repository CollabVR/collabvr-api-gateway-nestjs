import { Module } from '@nestjs/common';
import { AccountManagementController } from './controllers/account-management.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		ClientsModule.registerAsync([
			{
				name: 'ACCOUNT_MANAGEMENT_SERVICE',
				useFactory: (configService: ConfigService) => ({
					transport: Transport.TCP,
					options: {
						host: '3.137.175.236',
						port: 3100,
					},
				}),
				inject: [ConfigService],
			},
		]),
	],
	controllers: [AccountManagementController],
	providers: [],
})
export class AccountManagementModule {}
