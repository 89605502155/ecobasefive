import { Module } from '@nestjs/common';
import { DotdepthService } from './dotdepth.service';
import { DotdepthResolver } from './dotdepth.resolver';

@Module({
  providers: [DotdepthResolver, DotdepthService]
})
export class DotdepthModule {}
