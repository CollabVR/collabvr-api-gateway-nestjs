import {
	Body,
	Controller,
	Inject,
	Param,
	ParseIntPipe,
	Patch,
	Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AccountEntity } from '../entities/account.entity';
import {
	CreateAccountDto,
	SignInDto,
	TokensDto,
	UpdateAccountDto,
} from '../dtos';
import { firstValueFrom } from 'rxjs';

@Controller('accounts')
@ApiTags('accounts')
export class AccountManagementController {
	constructor(
		@Inject('ACCOUNT_MANAGEMENT_SERVICE')
		private readonly clientAccountManagementService: ClientProxy,
	) {}

	@Post('auth/sign-up')
	@ApiCreatedResponse({ type: AccountEntity })
	async createAccount(
		@Body() createAccountDto: CreateAccountDto,
	): Promise<AccountEntity> {
		const response = await firstValueFrom(
			this.clientAccountManagementService.send(
				'create-account',
				createAccountDto,
			),
		);
		return response;
	}

	@Patch(':id')
	@ApiCreatedResponse({ type: AccountEntity })
	async updateAccount(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateAccountDto: UpdateAccountDto,
	): Promise<AccountEntity> {
		const response = await firstValueFrom(
			this.clientAccountManagementService.send('update-account', {
				id,
				updateAccountDto,
			}),
		);
		return response;
	}

	@Post('auth/sign-in')
	@ApiOkResponse({ type: TokensDto })
	async signIn(@Body() signInDto: SignInDto): Promise<TokensDto> {
		return await firstValueFrom(
			this.clientAccountManagementService.send('sign-in', signInDto),
		);
	}

	@Post('auth/send-email-verification-code/:email')
	async sendEmailVerificationCode(@Param('email') email: string) {
		return await firstValueFrom(
			this.clientAccountManagementService.send(
				'send-email-verification-code',
				email,
			),
		);
	}
}
