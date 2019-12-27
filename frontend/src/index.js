import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
})

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: 'sinsta',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
