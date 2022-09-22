import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StationEntity } from 'src/station/entities/station.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StationService {
	constructor(
		@InjectRepository(StationEntity)
		private readonly stationsRepository: Repository<StationEntity>,
	){}

	async getAll():Promise<StationEntity[]>{
		return this.stationsRepository.find();
	}
}
