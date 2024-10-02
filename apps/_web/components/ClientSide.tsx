'use client';
import { useGetUserQuery } from '@web/graphql';

export default function ClientSide() {
  const { data } = useGetUserQuery();
  return <div>{data?.getUser.id}</div>;
}
