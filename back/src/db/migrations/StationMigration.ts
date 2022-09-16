import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class StationMigration implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "stations_item",
                columns: [
                    {
                        name: "name",
                        type: "text",
                        isPrimary: true,
                        isUnique: true,
                        isNullable: true,

                    },
                    {
                        name: "longitude",
                        type: "number",
                        isNullable: true,
                    },
                    {
                        name: "latitude",
                        type: "number",
                        isNullable: true,
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
//StationMigration1663320087414