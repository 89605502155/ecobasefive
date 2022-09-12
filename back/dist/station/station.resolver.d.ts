import { StationService } from './station.service';
export declare class StationResolver {
    private readonly stationService;
    constructor(stationService: StationService);
    getAllStations(): Promise<string>;
}
