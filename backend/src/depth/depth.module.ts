import { Module } from '@nestjs/common';
import { DepthService } from './services/depth/depth.service';
import { DepthResolver } from './resolvers/depth/depth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepthEntity } from './entities/depth.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DepthEntity])],
  providers: [DepthService, DepthResolver]
})
export class DepthModule {}
