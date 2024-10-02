import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { HouseSearch } from './entities/house-search.entity';

@ObjectType()
@Entity()
export class House {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  postalCode: number;

  @Column()
  @Field()
  streetName: string;

  @Column()
  @Field()
  houseNumber: number;

  @Column()
  @Field()
  orientationNumber: number;

  @Column()
  @Field()
  fullAddress: string;

  @Column()
  @Field()
  cin: string;

  @Column()
  @Field({ description: 'Název obce' })
  municipalityName: string;

  @OneToMany(() => HouseSearch, (search) => search.house)
  @Field(() => [HouseSearch])
  searches: HouseSearch[];

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
