import { MigrationInterface, QueryRunner } from "typeorm";
export declare class DefaultMigration implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
