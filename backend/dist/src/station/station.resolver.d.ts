import { StationService } from './station.service';
import { CreateStationInput } from './dto/create-station.input';
import { UpdateStationInput } from './dto/update-station.input';
export declare class StationResolver {
    private readonly stationService;
    constructor(stationService: StationService);
    createStation(createStationInput: CreateStationInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateStation(updateStationInput: UpdateStationInput): string;
    removeStation(id: number): string;
}
