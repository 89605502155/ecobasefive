"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stationProviders = void 0;
const constant_1 = require("../constant");
const station_entity_1 = require("./station.entity");
exports.stationProviders = [
    {
        provide: constant_1.STATION_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(station_entity_1.StationEntity),
        inject: [constant_1.DATA_SOURCE],
    },
];
//# sourceMappingURL=station.providers.js.map