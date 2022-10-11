import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepthEntity } from 'src/modules/depth/entities/depth.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class DepthService {
    constructor(
        @InjectRepository(DepthEntity)
        private readonly depthsRepository: Repository<DepthEntity>,
    ){}

    async getAllDepths():Promise<DepthEntity[]|null>{
        return await this.depthsRepository.find();
    }
    async getDepthByStation(stationName: string):Promise<DepthEntity[]|null>{
        return await this.depthsRepository.findBy({
            station: Equal(stationName)
        });
    }

}
