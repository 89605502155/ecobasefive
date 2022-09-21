import { Query, Resolver } from '@nestjs/graphql';
import { DepthEntity } from 'src/depth/entities/depth.entity';
import { DepthService } from 'src/depth/services/depth/depth.service';

@Resolver('Depth')
export class DepthResolver {
    constructor(
        private readonly depthService: DepthService
    ){}

    @Query(()=>[DepthEntity])
    async getAllDepths():Promise<DepthEntity[]>{
        return this.depthService.getAllDepths()
    }

    // @Query(()=>[DepthEntity])
    // async getDepthByStation(@Args('station')station:string):Promise<DepthEntity[]>{
    //     return this.depthService.getDepthByStation(station)
    // }
}
