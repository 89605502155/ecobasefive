import { Module } from '@nestjs/common';
import { StationResolver } from './station.resolver';
import { StationService } from './station.service';

@Module({
  providers: [StationService, StationResolver]
})
export class StationModule {}
