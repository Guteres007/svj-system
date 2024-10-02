import { User } from '@server/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { House } from '@server/house/house.entity';
import { HouseRequestStatusEnum } from '../enums/house-request-status.enum';

@ObjectType()
@Entity()
export class HouseRequest {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field(() => User)
  @ManyToOne(() => User)
  user: User;

  @Field(() => House)
  @ManyToOne(() => House)
  house: House;

  @Field(() => HouseRequestStatusEnum)
  @Column()
  status: HouseRequestStatusEnum;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;
}
