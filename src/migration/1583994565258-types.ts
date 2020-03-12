import {MigrationInterface, QueryRunner} from "typeorm";

export class types1583994565258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE USER`)
    }

}
