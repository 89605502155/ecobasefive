import { StationEntity } from 'src/station/entities/station.entity';
import { StationService } from 'src/station/services/station/station.service';
export declare class StationResolver {
    private readonly stationService;
    constructor(stationService: StationService);
    getAll(): Promise<StationEntity[]>;
}
