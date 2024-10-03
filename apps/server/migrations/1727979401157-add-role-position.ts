import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRolePosition1727979401157 implements MigrationInterface {
    name = 'AddRolePosition1727979401157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_roles_enum" AS ENUM('user', 'board', 'controlBody', 'admin')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "roles" "public"."user_roles_enum" array NOT NULL DEFAULT '{user}'`);
        await queryRunner.query(`CREATE TYPE "public"."user_positions_enum" AS ENUM('Předseda', 'Místopředseda', 'Člen výboru', 'Předseda kontrolní komise', 'Člen kontrolní komise', 'Administrátor')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "positions" "public"."user_positions_enum" array NOT NULL DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "positions"`);
        await queryRunner.query(`DROP TYPE "public"."user_positions_enum"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "roles"`);
        await queryRunner.query(`DROP TYPE "public"."user_roles_enum"`);
    }

}
