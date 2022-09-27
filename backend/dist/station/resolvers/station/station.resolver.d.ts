import { DepthEntity } from 'src/depth/entities/depth.entity';
import { DepthService } from 'src/depth/services/depth/depth.service';
import { StationEntity } from 'src/station/entities/station.entity';
import { StationService } from 'src/station/services/station/station.service';
export declare class StationResolver {
    private readonly stationService;
    private readonly depthService;
    constructor(stationService: StationService, depthService: DepthService);
    getAll(): Promise<StationEntity[]>;
    getAllDepths(): Promise<DepthEntity[]>;
    getDepthByStation(stationName: string): Promise<DepthEntity[] | null>;
}
