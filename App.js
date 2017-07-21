import React from 'react';
import {Router, Scene} from 'react-native-router-flux'

import Posts from './posts'
import AddPost from './addpost'

export default class App extends React.Component {

    render() {
      return (
      <Router>
        <Scene key="root">
          <Scene key="posts"  initial={true} component={Posts} hideNavBar={true}/>
          <Scene key="addpost" component={AddPost} hideNavBar={true}/>

        </Scene>
      </Router>
      )
    }
}



