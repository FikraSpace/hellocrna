import React from 'react';
import {Router, Scene} from 'react-native-router-flux'
import {Font} from 'expo'
import Posts from './posts'
import AddPost from './addpost'
import Login from './login'
import Signup from './signup'

export default class App extends React.Component {

    state = {
      fontLoaded: false
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        //Setting the state to true when font is loaded.
        this.setState({
            fontLoaded: true
        });
    }

    render() {

      if (this.state.fontLoaded) {

      return (
      <Router>
        <Scene key="root">
          <Scene key="posts" component={Posts} hideNavBar={true}/>
          <Scene key="addpost" component={AddPost} hideNavBar={true}/>
          <Scene key="login" component={Login} hideNavBar={true} initial={true}/>
          <Scene key="signup" component={Signup} hideNavBar={true} />
        </Scene>
      </Router>
      )
      } else {
        return null
      }

    }
}



