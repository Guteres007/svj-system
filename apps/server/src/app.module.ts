import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DB_CONFIG } from './data-source';
import { UserModule } from './user/user.module';

import { Logger } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { GraphQLFormattedError } from 'graphql/error';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { HouseModule } from './house/house.module';
import AresModule from './ares/ares.module';
import { MembershipModule } from './membership/membership.module';

// TODO: Soubor
export const formatGraphQLError = (
  formattedError: GraphQLFormattedError,
  error: unknown,
): GraphQLFormattedError => {
  if (formattedError.message !== 'Unauthorized') {
    Logger.log({
      level: 'error',
      context: 'GraphQLError',
      message: `${formattedError.message} path=${
        formattedError?.path?.join('.') ?? ''
      }`,
      path: formattedError?.path?.join('.') ?? '',
      error: formattedError.message,
    });
  }
  return formattedError;
};

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      introspection: true,
      cache: 'bounded',
      persistedQueries: false,
      formatError: formatGraphQLError,
    }),
    UserModule,
    AuthModule,
    AresModule,
    MembershipModule,
    TypeOrmModule.forRoot({
      ...DB_CONFIG,
      autoLoadEntities: true,
    }),
    HouseModule,
  ],
  controllers: [],
  providers: [
    JwtService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
