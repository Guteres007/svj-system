import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '@server/user/user.service';
import { GraphQLError } from 'graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './inputs/login-user.input';
import { RegisterUserInput } from './inputs/register-user.input';
import { LoginResponse } from './login.response';
import { Public } from './public.decorator';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Public()
  @Mutation(() => Boolean)
  async registerUser(
    @Args('input') input: RegisterUserInput,
  ): Promise<boolean> {
    if (await this.userService.createUser(input)) {
      return true;
    }
    return false;
  }

  @Public()
  @Mutation(() => LoginResponse)
  async loginUser(
    @Args('input') input: LoginUserInput,
  ): Promise<LoginResponse> {
    const user = await this.authService.validateUser(input);

    if (!user) {
      throw new GraphQLError('Invalid credentials', {
        extensions: {
          code: 'BAD_USER_INPUT',
        },
      });
    }
    return await this.authService.login(user);
  }
}
