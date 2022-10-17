import { CreateStationInput } from './dto/create-station.input';
import { UpdateStationInput } from './dto/update-station.input';
export declare class StationService {
    create(createStationInput: CreateStationInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStationInput: UpdateStationInput): string;
    remove(id: number): string;
}
