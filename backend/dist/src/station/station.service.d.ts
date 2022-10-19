import { CreateStationInput } from './dto/create-station.input';
import { UpdateStationInput } from './dto/update-station.input';
export declare class StationService {
    create(createStationInput: CreateStationInput): string;
    findAll(): string;
    findOne(name: string): string;
    update(name: string, updateStationInput: UpdateStationInput): string;
    remove(name: string): string;
}
