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
    Fab
} from 'native-base';


import {
    Font
} from 'expo'; //to include font from expo.


import {
    StatusBar,
    StyleSheet,
    View,
    Platform
} from 'react-native'; //Most of the react native components can be found in NativeBase


export default class Posts extends React.Component {
    //checking state for if font is loaded or not.
    state = {
        fontLoaded: false,
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

    render() {

      if (this.state.fontLoaded) {
        return (
        <Container style={{paddingTop: Expo.Constants.statusBarHeight}}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
          <List>
            <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropup"></Icon>
                <Text note>1000</Text>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropdown"></Icon>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropup"></Icon>
                <Text note>1000</Text>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropdown"></Icon>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropup"></Icon>
                <Text note>1000</Text>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropdown"></Icon>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropup"></Icon>
                <Text note>1000</Text>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropdown"></Icon>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropup"></Icon>
                <Text note>1000</Text>
                <Icon style={{margin:10, fontSize:30}} name="md-arrow-dropdown"></Icon>
            </ListItem>

          </List>
          </Content>
          <Fab onPress={()=>{
            Actions.addpost({
              text: 'theweek'
            })
          }}
            style={{ backgroundColor: '#5067FF'}}
            position="bottomRight">
            <Icon name="add" />
          </Fab>
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
