import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationEntity } from './entities/station.entity';
import { StationService } from './services/station/station.service';
import { StationResolver } from './resolvers/station/station.resolver';

@Module({
	imports:[
		TypeOrmModule.forFeature([StationEntity])
	],
	providers: [StationService, StationResolver]
})
export class StationModule {}
