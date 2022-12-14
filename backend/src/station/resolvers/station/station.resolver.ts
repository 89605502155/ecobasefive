import { Args, Query, Resolver } from '@nestjs/graphql';
import { DepthEntity } from 'src/depth/entities/depth.entity';
import { DepthService } from 'src/depth/services/depth/depth.service';
import { StationEntity } from 'src/station/entities/station.entity';
import { StationService } from 'src/station/services/station/station.service';

@Resolver('Station')
export class StationResolver {
    constructor(
        private readonly stationService:StationService,
        private readonly depthService: DepthService
    ){}

    @Query(()=> [StationEntity])
    async getAll():Promise<StationEntity[]>{
        return await this.stationService.getAll();
    }

    @Query(()=>[DepthEntity])
    async getAllDepths():Promise<DepthEntity[]>{
        return await this.depthService.getAllDepths();
    }

    @Query(()=>[DepthEntity],{nullable: true})
    async getDepthByStation(@Args('station') stationName: string): Promise<DepthEntity[]|null>{
        return await this.depthService.getDepthByStation(stationName);
    }


}
