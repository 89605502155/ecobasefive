import { StationEntity } from 'src/station/entities/station.entity';
import { Repository } from 'typeorm';
export declare class StationService {
    private readonly stationsRepository;
    constructor(stationsRepository: Repository<StationEntity>);
    getAll(): Promise<StationEntity[]>;
}
