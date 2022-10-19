import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUserData21666183745959 implements MigrationInterface {
    name = 'SeedUserData21666183745959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "depth" ("id" SERIAL NOT NULL, "depth" integer NOT NULL, "salinity" integer, "DOC" integer, "stationId" integer, "stationName" character varying, CONSTRAINT "PK_5b5b57a435648a8edf0d6905456" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "depth" ADD CONSTRAINT "FK_042bc677b1fd7d8d481b47e7bbf" FOREIGN KEY ("stationId", "stationName") REFERENCES "station"("id","name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "depth" DROP CONSTRAINT "FK_042bc677b1fd7d8d481b47e7bbf"`);
        await queryRunner.query(`DROP TABLE "depth"`);
    }

}
