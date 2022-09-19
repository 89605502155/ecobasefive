import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationEntity } from './station.entity';
import { StationResolver } from './station.resolver';
import { StationService } from './station.service';

@Module({
  imports:[TypeOrmModule.forFeature([StationEntity])],
  providers: [StationService, StationResolver]
})
export class StationModule {}
