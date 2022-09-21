import { DepthEntity } from 'src/depth/entities/depth.entity';
import { DepthService } from 'src/depth/services/depth/depth.service';
export declare class DepthResolver {
    private readonly depthService;
    constructor(depthService: DepthService);
    getAllDepths(): Promise<DepthEntity[]>;
}
