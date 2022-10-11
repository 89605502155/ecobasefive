"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'qwerty',
    database: 'rusocean1',
    entities: ['dist/**/*.entity.js'],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['dist/**/migrations/*.js']
});
//# sourceMappingURL=ormconfig.js.map