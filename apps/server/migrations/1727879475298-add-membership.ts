import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMembership1727879475298 implements MigrationInterface {
    name = 'AddMembership1727879475298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_house" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "requestedAt" TIMESTAMP NOT NULL DEFAULT now(), "activatedAt" TIMESTAMP, "userId" integer, "houseId" uuid, CONSTRAINT "PK_377ac48e9144269163aaeeba389" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "house_request" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "houseId" uuid, CONSTRAINT "PK_7b324c06ede515509a130a5f09a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_house" ADD CONSTRAINT "FK_782c389a1831c1ccf38e4453acb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_house" ADD CONSTRAINT "FK_db876abe7acfa9c963593a96d50" FOREIGN KEY ("houseId") REFERENCES "house"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "house_request" ADD CONSTRAINT "FK_199d2466c4e774c7b82e0a18f5e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "house_request" ADD CONSTRAINT "FK_51dcab48a822eb8ff28fee06658" FOREIGN KEY ("houseId") REFERENCES "house"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "house_request" DROP CONSTRAINT "FK_51dcab48a822eb8ff28fee06658"`);
        await queryRunner.query(`ALTER TABLE "house_request" DROP CONSTRAINT "FK_199d2466c4e774c7b82e0a18f5e"`);
        await queryRunner.query(`ALTER TABLE "user_house" DROP CONSTRAINT "FK_db876abe7acfa9c963593a96d50"`);
        await queryRunner.query(`ALTER TABLE "user_house" DROP CONSTRAINT "FK_782c389a1831c1ccf38e4453acb"`);
        await queryRunner.query(`DROP TABLE "house_request"`);
        await queryRunner.query(`DROP TABLE "user_house"`);
    }

}
