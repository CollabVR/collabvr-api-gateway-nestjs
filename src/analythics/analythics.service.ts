import { Injectable } from '@nestjs/common';
import { CreateAnalythicDto } from './dto/create-analythic.dto';
import { UpdateAnalythicDto } from './dto/update-analythic.dto';

@Injectable()
export class AnalythicsService {
  create(createAnalythicDto: CreateAnalythicDto) {
    return 'This action adds a new analythic';
  }

  findAll() {
    return `This action returns all analythics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} analythic`;
  }

  update(id: number, updateAnalythicDto: UpdateAnalythicDto) {
    return `This action updates a #${id} analythic`;
  }

  remove(id: number) {
    return `This action removes a #${id} analythic`;
  }
}
