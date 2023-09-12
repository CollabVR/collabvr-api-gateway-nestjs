import { Module } from '@nestjs/common';
import { AnalythicsService } from './analythics.service';
import { AnalythicsController } from './analythics.controller';

@Module({
  controllers: [AnalythicsController],
  providers: [AnalythicsService],
})
export class AnalythicsModule {}
