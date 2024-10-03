import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HouseSelectOptions {
  @Field()
  id: string;

  @Field()
  name: string;
}
