import { Card, Image, Icon } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectTo: '',
    }
  }

  redirectTo(uri) {
    this.setState({
      redirectTo: uri,
    })
  }

  render() {
    const { showCommentTag } = this.props
    const { id, user, description, image, creationDate, commentsCount } = this.props.post
    const { redirectTo } = this.state

    return redirectTo ? (
      <Redirect to={redirectTo} />
    ) : (
      <Card centered>
        <Image fluid src={image} wrapped ui={false} />
        <Card.Content textAlign="left">
          <Card.Header>{user}</Card.Header>
          <Card.Description>{description}</Card.Description>
          <Card.Meta>{new Date(creationDate).toDateString()}</Card.Meta>
        </Card.Content>
        {showCommentTag && (
          <Card.Content extra textAlign="left">
            <a href="#" onClick={() => this.redirectTo(`post/${id}/comments`)}>
              <Icon name="comment" />
              {commentsCount} Comment{commentsCount > 1 ? 's' : ''} (Click to show)
            </a>
          </Card.Content>
        )}
      </Card>
    )
  }
}
