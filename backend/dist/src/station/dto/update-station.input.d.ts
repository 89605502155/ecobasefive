import { CreateStationInput } from './create-station.input';
declare const UpdateStationInput_base: import("@nestjs/common").Type<Partial<CreateStationInput>>;
export declare class UpdateStationInput extends UpdateStationInput_base {
    name: string;
    longitude: number;
    latitude: number;
}
export {};