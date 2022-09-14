import { DataSource } from 'typeorm';
import { StationEntity } from './station.entity';
export declare const stationProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<StationEntity>;
    inject: string[];
}[];
