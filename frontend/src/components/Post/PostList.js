import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './Post'

const FEED_QUERY = gql`
  {
    posts {
      id
      user
      description
      image
      creationDate
      commentsCount
    }
  }
`

export default function PostList() {
  return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
        return (
          <div>
            {data.posts.map((post) => (
              <Post key={post.id} post={post} showCommentTag={true} />
            ))}
          </div>
        )
      }}
    </Query>
  )
}
