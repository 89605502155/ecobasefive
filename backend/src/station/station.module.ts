import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StationEntity } from './entities/station.entity';
import { StationService } from './services/station/station.service';
import { StationResolver } from './resolvers/station/station.resolver';
import { DepthEntity } from 'src/depth/entities/depth.entity';
import { DepthService } from 'src/depth/services/depth/depth.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([StationEntity, DepthEntity])
    ],
    providers: [StationService, StationResolver, DepthService]
})
export class StationModule {}
