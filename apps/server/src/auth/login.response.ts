import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@server/user/user.entity';

@ObjectType()
export class LoginResponse {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;

  @Field(() => User)
  user: User;
}
