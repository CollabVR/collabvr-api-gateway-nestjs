import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ActivityActionDto } from './dto/activity-action.dto';
import { UserActionDto } from './dto/user-action.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('analytics')
@ApiTags('analytics')
export class AnalyticsController {

  constructor(@Inject('ANALYTICS_SERVICE')
  private readonly clientAnalyticsService: ClientProxy) {}

  @Get('user-actions')
  async getAllUserActions() {
    return firstValueFrom(this.clientAnalyticsService.send('get-all-user-actions', {}));
  }

  @Get('activity-action')
  async getAllActivityActions() {
    return firstValueFrom(this.clientAnalyticsService.send('get-all-activity-actions', {}));
  }

  @Get('activity-action/:id')
  async getActivityAction(@Param('id') id: number) {
    return firstValueFrom(this.clientAnalyticsService.send('get-activity-action-by-id', { id }));
  }

  @Post('activity-action')
  async createOrUpdateActivityAction(@Body() dto: ActivityActionDto) {
    return firstValueFrom(this.clientAnalyticsService.send('create-or-update-activity-action', dto));
  }

  @Get('user-action/:userId/:activityId')
  async getUserAction(@Param('userId') userId: number, @Param('activityId') activityId: number) {
    return firstValueFrom(this.clientAnalyticsService.send('get-user-action-by-composite-id', { userId, activityId }));
  }

  @Post('user-action')
  async createOrUpdateUserAction(@Body() dto: UserActionDto) {
    return firstValueFrom(this.clientAnalyticsService.send('create-or-update-user-action', dto));
  }

}
