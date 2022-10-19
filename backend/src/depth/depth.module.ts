import { Module } from '@nestjs/common';
import { DepthService } from './depth.service';
import { DepthResolver } from './depth.resolver';

@Module({
  providers: [DepthResolver, DepthService]
})
export class DepthModule {}
