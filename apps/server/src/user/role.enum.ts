import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  user = 'user',
  board = 'board',
  controlBody = 'controlBody',
  admin = 'admin',
}

registerEnumType(Role, {
  name: 'Role',
});
