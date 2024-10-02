import { registerEnumType } from '@nestjs/graphql';

export enum HouseRequestStatusEnum {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected',
}

registerEnumType(HouseRequestStatusEnum, {
  name: 'HouseRequestStatusEnum',
});
