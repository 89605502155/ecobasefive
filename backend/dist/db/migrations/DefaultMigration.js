"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultMigration = void 0;
class DefaultMigration {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE stations_item (
            name text PRIMARY KEY ,
            depth numeric CHECK (depth >= 0),
            salinity numeric,
            DOC numeric
        );`);
        await queryRunner.query(`
            CREATE TYPE user_role AS ENUM ('admin', 'editor', 'guest');
            CREATE TABLE users(
                login text PRIMARY KEY,
                password text,
                rememberTocken text,
                email text NOT NULL,
                firstName text NOT NULL,
                lastName text NOT NULL,
                country text,
                role user_role DEFAULT 'guest',
                is_verified boolean DEFAULT FALSE,
                created_at date
        )`);
        await queryRunner.query(`CREATE TABLE depths_item (
            station_name text REFERENCES stations_item (name),
            longitude numeric NOT NULL CHECK (longitude >= -180 AND longitude <= 180),
            latitude numeric NOT NULL CHECK (latitude >= -90 AND latitude <= 90)
        );`);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('stations_item');
    }
}
exports.DefaultMigration = DefaultMigration;
//# sourceMappingURL=DefaultMigration.js.map