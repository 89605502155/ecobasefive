import { Query, Resolver } from '@nestjs/graphql';
import { StationEntity } from './station.entity';
import { StationService } from './station.service';

@Resolver()
export class StationResolver {
    constructor(private readonly stationService:StationService){}

    @Query(()=> [StationEntity])
    async getAllStations(){
        return this.stationService.getAll()
    }
}