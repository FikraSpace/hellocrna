import React from 'react'

import {Actions} from 'react-native-router-flux'
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    List,
    ListItem,
    Fab,
    Form,
    Item,
    Input,
    Textarea
} from 'native-base';


import {
    Font
} from 'expo'; //to include font from expo.


import {
    StatusBar,
    StyleSheet,
    View,
    Platform,
    TextInput,
    AsyncStorage
} from 'react-native'; //Most of the react native components can be found in NativeBase


export default class AddPost extends React.Component {
    //checking state for if font is loaded or not.
    state = {
        fontLoaded: false,
        content: ''
    };


    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        //Setting the state to true when font is loaded.
        this.setState({
            fontLoaded: true
        });
    }

    goBack(){
      Actions.pop()
    }

    async sendNewPost(){

      let token = await AsyncStorage.getItem('token')

      fetch('https://mareddit.herokuapp.com/api/articles',{
        method: 'POST',
        headers: JSON.stringify({
          token: 
        },
        body:{
          content: this.state.content,
          title:'',
        })
      })

      Actions.pop()
    }


    this.setContent(val){
      this.setState({
        content: val
      })
    }

    render() {

      if (this.state.fontLoaded) {
        return (
        <Container style={{paddingTop: Expo.Constants.statusBarHeight}}>
          <Header>
            <Left>
              <Button onPress={this.goBack.bind(this)} transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>New Post</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Textarea onChangeText={this.setContent.bind(this)} value={this.state.content} style={{alignSelf:'stretch'}} placeholder="Whats on your mind?" />
          </Content>
          <Footer>
          <FooterTab>
            <Button onPress={this.goBack.bind(this)} full>
              <Text onPress={this.sendNewPost.bind(this)}>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>

        </Container>

        )
      } else {
        return (
          <Container>
          </Container>
        )
      } 

    }

}
