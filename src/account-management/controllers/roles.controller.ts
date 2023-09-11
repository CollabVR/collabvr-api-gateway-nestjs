import { ClientProxy } from '@nestjs/microservices';
import { JwtAuthGuard } from 'src/common/guard';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorator';
import { RoleEntity } from '../entities/role.entity';
import { firstValueFrom } from 'rxjs';

@Controller('roles')
@ApiTags('roles')
export class RolesController {
	constructor(
		@Inject('ACCOUNT_MANAGEMENT_SERVICE')
		private readonly clientAccountManagementService: ClientProxy,
	) {}

	@Get()
	@ApiOkResponse({ type: RoleEntity, isArray: true })
	async getRoles(): Promise<RoleEntity[]> {
		const response = await firstValueFrom(
			this.clientAccountManagementService.send('get-roles', {}),
		);
		return response;
	}
}
