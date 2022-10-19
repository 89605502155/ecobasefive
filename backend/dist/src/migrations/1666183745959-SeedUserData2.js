"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedUserData21666183745959 = void 0;
class SeedUserData21666183745959 {
    constructor() {
        this.name = 'SeedUserData21666183745959';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "depth" ("id" SERIAL NOT NULL, "depth" integer NOT NULL, "salinity" integer, "DOC" integer, "stationId" integer, "stationName" character varying, CONSTRAINT "PK_5b5b57a435648a8edf0d6905456" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "depth" ADD CONSTRAINT "FK_042bc677b1fd7d8d481b47e7bbf" FOREIGN KEY ("stationId", "stationName") REFERENCES "station"("id","name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "depth" DROP CONSTRAINT "FK_042bc677b1fd7d8d481b47e7bbf"`);
        await queryRunner.query(`DROP TABLE "depth"`);
    }
}
exports.SeedUserData21666183745959 = SeedUserData21666183745959;
//# sourceMappingURL=1666183745959-SeedUserData2.js.map