import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterUserInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
