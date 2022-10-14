import { MigrationInterface, QueryRunner } from 'typeorm';

export class DefaultMigration implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {    
        await queryRunner.query(`CREATE TABLE depths_item (
            id numeric PRIMARY KEY
            name text REFERENCES stations_item (station_name),
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

        await queryRunner.query(`CREATE TABLE stations_item (
            station_name text PRIMARY KEY,
            longitude numeric NOT NULL CHECK (longitude >= -180 AND longitude <= 180),
            latitude numeric NOT NULL CHECK (latitude >= -90 AND latitude <= 90)
        );`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('stations_item');
    }

}
//StationMigration1663320087414