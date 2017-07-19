import React from 'react';
import {View, Text} from 'react-native';


export default class AddPost extends React.Component {

  componentDidMount() {
    alert(this.props.text)  
  }


  render(){
    return (
      <View>
        <Text style={{fontSize:100}}>Hello World</Text>
      </View>
      )
  }
}
