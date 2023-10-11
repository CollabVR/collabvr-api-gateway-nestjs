import {
	Body,
	Controller,
	Delete,
	Get,
	Inject,
	Param,
	ParseIntPipe,
	Post,
	Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ActivityEntity } from './entities/activity.entity';
import { firstValueFrom } from 'rxjs';

@Controller('activities')
@ApiTags('activities')
export class ActivitiesController {
	constructor(
		@Inject('ACTIVITY_SERVICE')
		private readonly clientActivityService: ClientProxy,
	) {}

	@Post()
	@ApiCreatedResponse({ type: ActivityEntity })
	async createAccount(
		@Body() createActivityDto: CreateActivityDto,
	): Promise<ActivityEntity> {
		console.log('createActivity', createActivityDto);
		const response = await firstValueFrom(
			this.clientActivityService.send('create-activity', {
				createActivityDto: createActivityDto,
			}),
		);
		return response;
	}

	@Get()
	@ApiOkResponse({ type: ActivityEntity, isArray: true })
	async getActivities(): Promise<ActivityEntity[]> {
		const response = await firstValueFrom(
			this.clientActivityService.send('get-activities', {}),
		);
		return response;
	}

	@Get(':id')
	@ApiOkResponse({ type: ActivityEntity, isArray: true })
	async getActivityById(
		@Param('id', ParseIntPipe) id: number,
	): Promise<ActivityEntity> {
		const response = await firstValueFrom(
			this.clientActivityService.send('get-activity-by-id', { id }),
		);
		return response;
	}

	
	@Get('/users/:id')
	@ApiOkResponse({ type: ActivityEntity, isArray: true })
	async getActivitiesByUserId(
		@Param('id', ParseIntPipe) id: number,
	): Promise<ActivityEntity> {
		const response = await firstValueFrom(
			this.clientActivityService.send('get-activities-by-user-id', { id }),
		);
		return response;
	}

	@Delete(':id')
	@ApiOkResponse({ type: ActivityEntity, isArray: true })
	async deleteActivityById(
		@Param('id', ParseIntPipe) id: number,
	): Promise<ActivityEntity> {
		const response = await firstValueFrom(
			this.clientActivityService.send('delete-activity-by-id', { id }),
		);
		return response;
	}

	@Put(':id')
	@ApiOkResponse({ type: ActivityEntity, isArray: true })
	async updateActivityById(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateActivityDto: UpdateActivityDto,
	): Promise<ActivityEntity> {
		const response = await firstValueFrom(
			this.clientActivityService.send('update-activity-by-id', {
				id,
				updateActivityDto,
			}),
		);
		return response;
	}

	@Get('/name/:name')
	@ApiOkResponse({ type: ActivityEntity, isArray: true })
	async getActivityByName(
		@Param('name') name: string,
	): Promise<ActivityEntity> {
		const response = await firstValueFrom(
			this.clientActivityService.send('get-activity-by-name', { name }),
		);
		return response;
	}
}
