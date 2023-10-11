import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountManagementModule } from './account-management/account-management.module';
import { ActivitiesModule } from './activities/activities.module';
import { AssetsModule } from './assets/assets.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		AccountManagementModule,
		ActivitiesModule,
		AssetsModule,
		AnalyticsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
