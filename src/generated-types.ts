import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Post = {
  __typename?: 'Post';
  text: Scalars['String'];
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  nextPageToken?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
};

export type Profile = {
  __typename?: 'Profile';
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  posts?: Maybe<PostsResponse>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  limit?: Maybe<Scalars['Int']>;
  pageToken?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  profile?: Maybe<Profile>;
};

export type PostsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<(
    { __typename?: 'PostsResponse' }
    & Pick<PostsResponse, 'nextPageToken'>
    & { posts?: Maybe<Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'text'>
    )>> }
  )> }
);


export const PostsDocument = gql`
    query Posts($limit: Int, $token: String) {
  posts(limit: $limit, pageToken: $token) {
    posts {
      text
    }
    nextPageToken
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      token: // value for 'token'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;