import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HouseSearchInput {
  @Field()
  name: string;

  @Field()
  address: string;
}
