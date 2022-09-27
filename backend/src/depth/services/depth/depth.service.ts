import { Injectable } from '@nestjs/common';
import { InputType } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { DepthEntity } from 'src/depth/entities/depth.entity';
import { StationEntity } from 'src/station/entities/station.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class DepthService {
	constructor(
		@InjectRepository(DepthEntity)
		private readonly depthsRepository: Repository<DepthEntity>,
	){}

	async getAllDepths():Promise<DepthEntity[]|null>{
		return this.depthsRepository.find();
	}
	async getDepthByStation(stationName: string):Promise<DepthEntity[]|null>{
		return this.depthsRepository.findBy({
			station: Equal(stationName)
		});
	}

}
