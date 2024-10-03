import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '@server/user/user.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { House } from '@server/house/entities/house.entity';

@ObjectType()
@Entity()
export class HouseSearch {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => House, (house) => house.searches)
  @Field(() => House)
  house: House;

  @ManyToOne(() => User, (user) => user.searches)
  @Field(() => User)
  user: User;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @DeleteDateColumn()
  @Field()
  deletedAt: Date;
}
