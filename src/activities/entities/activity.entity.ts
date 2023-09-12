import { ApiProperty } from '@nestjs/swagger';
import { ActivityUserEntity } from './activity-user.entity';

export class ActivityEntity {
	@ApiProperty()
	id: number;
	@ApiProperty()
	name: string;
	@ApiProperty()
	description: string;
	@ApiProperty()
	startTime: string;
	@ApiProperty()
	endTime: string;
	@ApiProperty()
	maxParticipants: number;
	@ApiProperty({ type: [ActivityUserEntity] })
	students: ActivityUserEntity[];
	@ApiProperty({ type: [ActivityUserEntity] })
	moderatos: ActivityUserEntity[];
	@ApiProperty()
	environmentId: string;
	@ApiProperty()
	status: string;
}
