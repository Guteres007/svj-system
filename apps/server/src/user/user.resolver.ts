import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';

@Resolver()
export class UserResolver {
  @Query(() => User)
  getUser(): User {
    return {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    } as User;
  }
}
