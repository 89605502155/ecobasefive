"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmAsyncConfig = void 0;
const config_1 = require("@nestjs/config");
exports.typeOrmAsyncConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async () => {
        return {
            type: 'postgres',
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT, 5421),
            username: process.env.TYPEORM_USERNAME,
            database: process.env.TYPEORM_DATABASE,
            password: process.env.TYPEORM_PASSWORD,
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            migrations: [__dirname + '/../db/migrations/*{.ts,.js}'],
            synchronize: false,
            logging: true,
        };
    },
};
//# sourceMappingURL=typeorm.config.js.map