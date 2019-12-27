import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import PostList from './components/Post/PostList'
import CommentList from './components/Comment/CommentList'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <Router>
      <Container textAlign="center" style={{ width: 'fit-content', margin: '2vh 0px' }} className="App">
        <Switch>
          <Route path="/post/:post_id/comments" component={CommentList} />
          <Route path="/">
            <PostList />
          </Route>
        </Switch>
      </Container>{' '}
    </Router>
  )
}

export default App
