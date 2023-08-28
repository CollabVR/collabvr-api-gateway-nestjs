import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountManagementModule } from './account-management/account-management.module';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), AccountManagementModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
