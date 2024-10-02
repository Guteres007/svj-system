import { registerEnumType } from '@nestjs/graphql';

export enum UserHouseStatusEnum {
  pending = 'pending',
  active = 'active',
  inactive = 'inactive',
  rejected = 'rejected',
}

registerEnumType(UserHouseStatusEnum, {
  name: 'UserHouseStatusEnum',
});
