import { Field, ID, ObjectType } from '@nestjs/graphql';

import { User } from '@server/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { UserHouseStatusEnum } from '../enums/user-house-status.enum';
import { House } from '@server/house/entities/house.entity';

@ObjectType()
@Entity()
export class UserHouse {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => User)
  @ManyToOne(() => User)
  user: User;

  @Field(() => House)
  @ManyToOne(() => House)
  house: House;

  @Field(() => UserHouseStatusEnum)
  @Column()
  status: UserHouseStatusEnum;

  @Field(() => Date)
  @CreateDateColumn()
  requestedAt: Date;

  @Field(() => Date)
  @Column({ nullable: true })
  activatedAt: Date;
}
