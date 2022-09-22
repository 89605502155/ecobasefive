import { Query, Resolver } from '@nestjs/graphql';
import { StationEntity } from 'src/station/entities/station.entity';
import { StationService } from 'src/station/services/station/station.service';

@Resolver('Station')
export class StationResolver {
	constructor(
		private readonly stationService:StationService
	){}

	@Query(()=> [StationEntity])
	async getAll():Promise<StationEntity[]>{
		return this.stationService.getAll();
	}


}
