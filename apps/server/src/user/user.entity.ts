import { Field, ID, ObjectType } from '@nestjs/graphql';
import { HouseSearch } from '@server/house/entities/house-search.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '@server/user/role.enum';
import { Position } from '@server/user/position.enum';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  lastName?: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @OneToMany(() => HouseSearch, (search) => search.user)
  @Field(() => [HouseSearch])
  searches: HouseSearch[];

  @Field(() => [Role])
  @Column({
    type: 'enum',
    enum: Role,
    array: true,
    default: [Role.user],
  })
  roles: Role[];

  @Field(() => [Position])
  @Column({
    type: 'enum',
    enum: Position,
    array: true,
    default: [], // Výchozí pozice (např. žádné)
  })
  positions: Position[];

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @DeleteDateColumn()
  @Field()
  deletedAt: Date;
}
