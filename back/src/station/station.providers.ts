
import { DATA_SOURCE, STATION_REPOSITORY } from 'src/constant';
import { DataSource } from 'typeorm';
import { StationEntity } from './station.entity';

export const stationProviders = [
  {
    provide: STATION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(StationEntity),
    inject: [DATA_SOURCE],
  },
];
