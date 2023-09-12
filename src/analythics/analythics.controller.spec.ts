import { Test, TestingModule } from '@nestjs/testing';
import { AnalythicsController } from './analythics.controller';
import { AnalythicsService } from './analythics.service';

describe('AnalythicsController', () => {
  let controller: AnalythicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalythicsController],
      providers: [AnalythicsService],
    }).compile();

    controller = module.get<AnalythicsController>(AnalythicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
