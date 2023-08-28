import { RoleEntity } from './role.entity';
import { ApiProperty } from '@nestjs/swagger';

export class AccountEntity {
	@ApiProperty()
	id: number;
	@ApiProperty()
	email: string;
	@ApiProperty()
	firstName: string;
	@ApiProperty()
	lastName: string;
	@ApiProperty()
	roles: RoleEntity[];
}
