import { Query, Resolver } from '@nestjs/graphql';
import { StationService } from './station.service';

@Resolver()
export class StationResolver {
    constructor(private readonly stationService:StationService){}

    @Query(()=>String)
    async getAllStations(){
        return this.stationService.getAll()
    }
}