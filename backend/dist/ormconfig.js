"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: configService.get('TYPEORM_HOST'),
    port: +configService.get('TYPEORM_PORT'),
    username: 'root',
    password: 'qwerty',
    database: 'rusocean2',
    synchronize: configService.get('TYPEORM_SYNC') === 'true' ? true : false,
    cache: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    extra: {
        trustServerCertificate: true,
    },
    migrationsRun: false,
    migrations: ['dist/**/migrations/*.js'],
    migrationsTableName: 'migration_history',
});
//# sourceMappingURL=ormconfig.js.map