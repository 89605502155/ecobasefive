import { Test, TestingModule } from '@nestjs/testing';
import { DepthResolver } from './depth.resolver';

describe('DepthResolver', () => {
  let resolver: DepthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepthResolver],
    }).compile();

    resolver = module.get<DepthResolver>(DepthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
