import { DepthEntity } from 'src/depth/entities/depth.entity';
import { Repository } from 'typeorm';
export declare class DepthService {
    private readonly depthsRepository;
    constructor(depthsRepository: Repository<DepthEntity>);
    getAllDepths(): Promise<DepthEntity[]>;
    getDepthByStation(stationName: string): Promise<DepthEntity[]>;
}
