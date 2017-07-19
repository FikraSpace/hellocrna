import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux'

import Posts from './posts'
import AddPost from './addpost'

export default class App extends React.Component {

    render() {
      return (
      <Router>
        <Scene key="root">
          <Scene initial={true} key="posts" component={Posts} hideNavBar={true}/>
          <Scene key="addpost" component={AddPost} hideNavBar={true}/>
        </Scene>
      </Router>

      )
    }
}


