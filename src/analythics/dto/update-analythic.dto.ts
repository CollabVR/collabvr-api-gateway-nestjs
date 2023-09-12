import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalythicDto } from './create-analythic.dto';

export class UpdateAnalythicDto extends PartialType(CreateAnalythicDto) {
  id: number;
}
