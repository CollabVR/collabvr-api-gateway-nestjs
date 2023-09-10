import { ApiProperty } from '@nestjs/swagger';

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
	@ApiProperty({ type: [Number] })
	participants: number[];
	@ApiProperty({ type: [Number] })
	moderators: number[];
	@ApiProperty()
	environmentId: number;
	@ApiProperty()
	status: string;
}
