import { GqlExecutionContext } from '@nestjs/graphql';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@server/user/user.entity';

export const AuthenticatedUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    return GqlExecutionContext.create(ctx).getContext().req.user;
  },
);
