import { MigrationInterface, QueryRunner } from "typeorm";

export class first1665977421725 implements MigrationInterface {
    name = 'first1665977421725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "station" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "longitude" integer NOT NULL, "latitude" integer NOT NULL, CONSTRAINT "PK_d319102cafe483b486cbbed30ce" PRIMARY KEY ("id", "name"))`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`DROP TABLE "station"`);
    }

}
