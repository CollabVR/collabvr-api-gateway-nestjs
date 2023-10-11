import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountManagementModule } from './account-management/account-management.module';
import { ActivitiesModule } from './activities/activities.module';
import { AssetsModule } from './assets/assets.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		AccountManagementModule,
		ActivitiesModule,
		AssetsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
