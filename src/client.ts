import { ApolloClient, ApolloLink, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { getCurrentToken } from './firebase'
import { setContext } from '@apollo/client/link/context'
import { relayStylePagination } from '@apollo/client/utilities';



const authMiddleware = setContext(async (operation, { headers }) => {
  const token = await getCurrentToken().catch(console.error)
  console.log({ token })
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}` ?? null
      }
    }
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

export const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: relayStylePagination(),
        }
      }
    }
  }),
  
});