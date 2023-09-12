import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountManagementModule } from './account-management/account-management.module';
import { ActivitiesModule } from './activities/activities.module';
import { AnalythicsModule } from './analythics/analythics.module';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), AccountManagementModule, ActivitiesModule, AnalythicsModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
