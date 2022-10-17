import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationResolver } from './station.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Station } from './entities/station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Station])],
  providers: [StationResolver, StationService]
})
export class StationModule {}
