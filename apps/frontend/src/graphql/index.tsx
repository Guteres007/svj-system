import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type House = {
  __typename?: 'House';
  cin: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  fullAddress: Scalars['String']['output'];
  houseNumber: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  /** Název obce */
  municipalityName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orientationNumber: Scalars['Float']['output'];
  postalCode: Scalars['Float']['output'];
  searches: Array<HouseSearch>;
  streetName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type HouseSearch = {
  __typename?: 'HouseSearch';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  house: House;
  id: Scalars['ID']['output'];
  user: User;
};

export type HouseSelectOptions = {
  __typename?: 'HouseSelectOptions';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  houseSearchSaveSearch: HouseSearch;
  loginUser: LoginResponse;
  registerUser: Scalars['Boolean']['output'];
};


export type MutationHouseSearchSaveSearchArgs = {
  streetName: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
  houseDetail: House;
  houseSearchResult: HouseSearch;
  houseUserHouses: Array<HouseSelectOptions>;
};


export type QueryHouseDetailArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHouseSearchResultArgs = {
  id: Scalars['ID']['input'];
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  searches: Array<HouseSearch>;
  updatedAt: Scalars['DateTime']['output'];
};

export type HouseDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HouseDetailQuery = { __typename?: 'Query', houseDetail: { __typename?: 'House', id: string, name: string, postalCode: number, streetName: string, houseNumber: number, orientationNumber: number, fullAddress: string, cin: string, municipalityName: string } };

export type HouseSearchResultQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type HouseSearchResultQuery = { __typename?: 'Query', houseSearchResult: { __typename?: 'HouseSearch', user: { __typename?: 'User', id: string, email: string }, house: { __typename?: 'House', id: string, name: string, postalCode: number, streetName: string, houseNumber: number, orientationNumber: number, fullAddress: string, cin: string, municipalityName: string } } };

export type HouseSearchSaveSearchMutationVariables = Exact<{
  streetName: Scalars['String']['input'];
}>;


export type HouseSearchSaveSearchMutation = { __typename?: 'Mutation', houseSearchSaveSearch: { __typename?: 'HouseSearch', id: string, user: { __typename?: 'User', id: string }, house: { __typename?: 'House', id: string } } };

export type HouseUserHousesQueryVariables = Exact<{ [key: string]: never; }>;


export type HouseUserHousesQuery = { __typename?: 'Query', houseUserHouses: Array<{ __typename?: 'HouseSelectOptions', id: string, name: string }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, createdAt: any } };

export type LoginUserMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email: string } } };

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: boolean };


export const HouseDetailDocument = gql`
    query HouseDetail($id: ID!) {
  houseDetail(id: $id) {
    id
    name
    postalCode
    streetName
    houseNumber
    orientationNumber
    fullAddress
    cin
    municipalityName
  }
}
    `;

/**
 * __useHouseDetailQuery__
 *
 * To run a query within a React component, call `useHouseDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useHouseDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHouseDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHouseDetailQuery(baseOptions: Apollo.QueryHookOptions<HouseDetailQuery, HouseDetailQueryVariables> & ({ variables: HouseDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HouseDetailQuery, HouseDetailQueryVariables>(HouseDetailDocument, options);
      }
export function useHouseDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HouseDetailQuery, HouseDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HouseDetailQuery, HouseDetailQueryVariables>(HouseDetailDocument, options);
        }
export function useHouseDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HouseDetailQuery, HouseDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HouseDetailQuery, HouseDetailQueryVariables>(HouseDetailDocument, options);
        }
export type HouseDetailQueryHookResult = ReturnType<typeof useHouseDetailQuery>;
export type HouseDetailLazyQueryHookResult = ReturnType<typeof useHouseDetailLazyQuery>;
export type HouseDetailSuspenseQueryHookResult = ReturnType<typeof useHouseDetailSuspenseQuery>;
export type HouseDetailQueryResult = Apollo.QueryResult<HouseDetailQuery, HouseDetailQueryVariables>;
export const HouseSearchResultDocument = gql`
    query houseSearchResult($id: ID!) {
  houseSearchResult(id: $id) {
    user {
      id
      email
    }
    house {
      id
      name
      postalCode
      streetName
      postalCode
      streetName
      houseNumber
      orientationNumber
      fullAddress
      cin
      municipalityName
    }
  }
}
    `;

/**
 * __useHouseSearchResultQuery__
 *
 * To run a query within a React component, call `useHouseSearchResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useHouseSearchResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHouseSearchResultQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHouseSearchResultQuery(baseOptions: Apollo.QueryHookOptions<HouseSearchResultQuery, HouseSearchResultQueryVariables> & ({ variables: HouseSearchResultQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HouseSearchResultQuery, HouseSearchResultQueryVariables>(HouseSearchResultDocument, options);
      }
export function useHouseSearchResultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HouseSearchResultQuery, HouseSearchResultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HouseSearchResultQuery, HouseSearchResultQueryVariables>(HouseSearchResultDocument, options);
        }
export function useHouseSearchResultSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HouseSearchResultQuery, HouseSearchResultQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HouseSearchResultQuery, HouseSearchResultQueryVariables>(HouseSearchResultDocument, options);
        }
export type HouseSearchResultQueryHookResult = ReturnType<typeof useHouseSearchResultQuery>;
export type HouseSearchResultLazyQueryHookResult = ReturnType<typeof useHouseSearchResultLazyQuery>;
export type HouseSearchResultSuspenseQueryHookResult = ReturnType<typeof useHouseSearchResultSuspenseQuery>;
export type HouseSearchResultQueryResult = Apollo.QueryResult<HouseSearchResultQuery, HouseSearchResultQueryVariables>;
export const HouseSearchSaveSearchDocument = gql`
    mutation HouseSearchSaveSearch($streetName: String!) {
  houseSearchSaveSearch(streetName: $streetName) {
    id
    user {
      id
    }
    house {
      id
    }
  }
}
    `;
export type HouseSearchSaveSearchMutationFn = Apollo.MutationFunction<HouseSearchSaveSearchMutation, HouseSearchSaveSearchMutationVariables>;

/**
 * __useHouseSearchSaveSearchMutation__
 *
 * To run a mutation, you first call `useHouseSearchSaveSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHouseSearchSaveSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [houseSearchSaveSearchMutation, { data, loading, error }] = useHouseSearchSaveSearchMutation({
 *   variables: {
 *      streetName: // value for 'streetName'
 *   },
 * });
 */
export function useHouseSearchSaveSearchMutation(baseOptions?: Apollo.MutationHookOptions<HouseSearchSaveSearchMutation, HouseSearchSaveSearchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HouseSearchSaveSearchMutation, HouseSearchSaveSearchMutationVariables>(HouseSearchSaveSearchDocument, options);
      }
export type HouseSearchSaveSearchMutationHookResult = ReturnType<typeof useHouseSearchSaveSearchMutation>;
export type HouseSearchSaveSearchMutationResult = Apollo.MutationResult<HouseSearchSaveSearchMutation>;
export type HouseSearchSaveSearchMutationOptions = Apollo.BaseMutationOptions<HouseSearchSaveSearchMutation, HouseSearchSaveSearchMutationVariables>;
export const HouseUserHousesDocument = gql`
    query HouseUserHouses {
  houseUserHouses {
    id
    name
  }
}
    `;

/**
 * __useHouseUserHousesQuery__
 *
 * To run a query within a React component, call `useHouseUserHousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHouseUserHousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHouseUserHousesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHouseUserHousesQuery(baseOptions?: Apollo.QueryHookOptions<HouseUserHousesQuery, HouseUserHousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HouseUserHousesQuery, HouseUserHousesQueryVariables>(HouseUserHousesDocument, options);
      }
export function useHouseUserHousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HouseUserHousesQuery, HouseUserHousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HouseUserHousesQuery, HouseUserHousesQueryVariables>(HouseUserHousesDocument, options);
        }
export function useHouseUserHousesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HouseUserHousesQuery, HouseUserHousesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HouseUserHousesQuery, HouseUserHousesQueryVariables>(HouseUserHousesDocument, options);
        }
export type HouseUserHousesQueryHookResult = ReturnType<typeof useHouseUserHousesQuery>;
export type HouseUserHousesLazyQueryHookResult = ReturnType<typeof useHouseUserHousesLazyQuery>;
export type HouseUserHousesSuspenseQueryHookResult = ReturnType<typeof useHouseUserHousesSuspenseQuery>;
export type HouseUserHousesQueryResult = Apollo.QueryResult<HouseUserHousesQuery, HouseUserHousesQueryVariables>;
export const GetUserDocument = gql`
    query getUser {
  getUser {
    id
    createdAt
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($input: LoginUserInput!) {
  loginUser(input: $input) {
    accessToken
    refreshToken
    user {
      id
      firstName
      lastName
      email
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: RegisterUserInput!) {
  registerUser(input: $input)
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;