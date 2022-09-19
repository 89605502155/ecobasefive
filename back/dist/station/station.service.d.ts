import { Repository } from 'typeorm';
import { StationEntity } from './station.entity';
export declare class StationService {
    private usersRepository;
    constructor(usersRepository: Repository<StationEntity>);
    getAll(): Promise<StationEntity[]>;
}
