import { Depth } from 'src/depth/entities/depth.entity';
export declare class Station {
    id: number;
    name: string;
    longitude: number;
    latitude: number;
    depths?: Depth[];
}
