import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Container, Header, Comment, Form, Button, Card } from 'semantic-ui-react'
import Post from '../Post/Post'

export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post_id: props.post_id || props.match ? props.match.params.post_id : '',
      comments: [],
      newComment: '',
    }
  }

  COMMENTS_QUERY() {
    return gql`
      {
        post(id:"${this.state.post_id}") {
          id
          user
          description
          image
          creationDate
          comments {
            id
            text
            user
            creationDate
          }
        }
      }
    `
  }

  handleValueChange(event, field) {
    this.setState({ [field]: event.target.value })
  }

  render() {
    return (
      <Query query={this.COMMENTS_QUERY()}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error: {error}</div>
          return (
            <Container>
              <Post post={data.post} showCommentTag={false} />
              <Card centered>
                <Card.Content>
                  <Container textAlign="left">
                    <Comment.Group>
                      <Header as="h3" dividing>
                        Comments
                      </Header>

                      {data.post.comments.map((comment, ind) => (
                        <Comment key={comment.id}>
                          <Comment.Content>
                            <Comment.Author>{comment.user}</Comment.Author>
                            <Comment.Metadata>
                              <div>{new Date(comment.creationDate).toDateString()}</div>
                            </Comment.Metadata>
                            <Comment.Text>{comment.text}</Comment.Text>
                          </Comment.Content>
                        </Comment>
                      ))}
                    </Comment.Group>
                  </Container>
                </Card.Content>
              </Card>
            </Container>
          )
        }}
      </Query>
    )
  }
}
