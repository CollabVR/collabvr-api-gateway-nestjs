import { Test, TestingModule } from '@nestjs/testing';
import { AnalythicsService } from './analythics.service';

describe('AnalythicsService', () => {
  let service: AnalythicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalythicsService],
    }).compile();

    service = module.get<AnalythicsService>(AnalythicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
