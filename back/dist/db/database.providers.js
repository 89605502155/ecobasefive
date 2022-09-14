"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const config_1 = require("@nestjs/config");
const constant_1 = require("../constant");
const typeorm_1 = require("typeorm");
exports.databaseProviders = (0, config_1.registerAs)('database', () => ([
    {
        provide: constant_1.DATA_SOURCE,
        useFactory: async (config) => {
            const dataSource = new typeorm_1.DataSource({
                type: config.get('TYPEORM_CONNECTION'),
                host: config.get('TYPEORM_HOST'),
                username: config.get('TYPEORM_USERNAME'),
                password: config.get('TYPEORM_PASSWORD'),
                database: config.get('TYPEORM_DATABASE'),
                port: config.get('TYPEORM_PORT'),
                entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
                synchronize: true,
                logging: true,
            });
            return dataSource.initialize();
        },
    },
]));
//# sourceMappingURL=database.providers.js.map