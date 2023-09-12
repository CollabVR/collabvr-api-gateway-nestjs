import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from './user-role.enum';

export class ActivityUserEntity {
	@ApiProperty()
	id: number;
	@ApiProperty()
	activityId: number;
	@ApiProperty()
	userId: number;
	@ApiProperty()
	userName: string;
	@ApiProperty()
	role: UserRole;
}
