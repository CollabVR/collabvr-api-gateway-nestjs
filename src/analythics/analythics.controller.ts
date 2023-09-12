import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AnalythicsService } from './analythics.service';
import { CreateAnalythicDto } from './dto/create-analythic.dto';
import { UpdateAnalythicDto } from './dto/update-analythic.dto';

@Controller()
export class AnalythicsController {
  constructor(private readonly analythicsService: AnalythicsService) {}

  @MessagePattern('createAnalythic')
  create(@Payload() createAnalythicDto: CreateAnalythicDto) {
    return this.analythicsService.create(createAnalythicDto);
  }

  @MessagePattern('findAllAnalythics')
  findAll() {
    return this.analythicsService.findAll();
  }

  @MessagePattern('findOneAnalythic')
  findOne(@Payload() id: number) {
    return this.analythicsService.findOne(id);
  }

  @MessagePattern('updateAnalythic')
  update(@Payload() updateAnalythicDto: UpdateAnalythicDto) {
    return this.analythicsService.update(updateAnalythicDto.id, updateAnalythicDto);
  }

  @MessagePattern('removeAnalythic')
  remove(@Payload() id: number) {
    return this.analythicsService.remove(id);
  }
}
