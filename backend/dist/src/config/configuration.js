"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT) || 4001,
    expiresTime: process.env.EXPIRES_TIME,
    db: {
        host: process.env.TYPEORM_HOST,
        port: process.env.TYPEORM_PORT,
        username: 'root',
        password: 'qwerty',
        name: 'rusocean2',
        synchronize: process.env.TYPEORM_SYNC === 'true' ? true : false,
        options: { trustServerCertificate: true },
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: 'red',
    },
});
//# sourceMappingURL=configuration.js.map