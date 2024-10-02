import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1727874760101 implements MigrationInterface {
    name = 'Init1727874760101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "house" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "postalCode" integer NOT NULL, "streetName" character varying NOT NULL, "houseNumber" integer NOT NULL, "orientationNumber" integer NOT NULL, "fullAddress" character varying NOT NULL, "cin" character varying NOT NULL, "municipalityName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_8c9220195fd0a289745855fe908" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "house_search" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "houseId" uuid, "userId" integer, CONSTRAINT "PK_6cb61768390205596e22e22b406" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying, "lastName" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "house_search" ADD CONSTRAINT "FK_7943b52677bbef8bc57d18d1b21" FOREIGN KEY ("houseId") REFERENCES "house"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "house_search" ADD CONSTRAINT "FK_9c7788d9bb3ed85b2ac9d79e398" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "house_search" DROP CONSTRAINT "FK_9c7788d9bb3ed85b2ac9d79e398"`);
        await queryRunner.query(`ALTER TABLE "house_search" DROP CONSTRAINT "FK_7943b52677bbef8bc57d18d1b21"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "house_search"`);
        await queryRunner.query(`DROP TABLE "house"`);
    }

}
