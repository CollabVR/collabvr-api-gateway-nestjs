import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountManagementModule } from './account-management/account-management.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), AccountManagementModule, ActivitiesModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
