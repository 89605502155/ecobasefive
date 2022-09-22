import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepthEntity } from 'src/depth/entities/depth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepthService {
	constructor(
		@InjectRepository(DepthEntity)
		private readonly depthsRepository: Repository<DepthEntity>,
	){}

	async getAllDepths():Promise<DepthEntity[]>{
		return this.depthsRepository.find();
	}
	async getDepthByStation(stationName: string):Promise<DepthEntity[]>{
		return this.depthsRepository.find();
	}

}
