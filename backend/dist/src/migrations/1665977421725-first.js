"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first1665977421725 = void 0;
class first1665977421725 {
    constructor() {
        this.name = 'first1665977421725';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "station" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "longitude" integer NOT NULL, "latitude" integer NOT NULL, CONSTRAINT "PK_d319102cafe483b486cbbed30ce" PRIMARY KEY ("id", "name"))`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`DROP TABLE "station"`);
    }
}
exports.first1665977421725 = first1665977421725;
//# sourceMappingURL=1665977421725-first.js.map