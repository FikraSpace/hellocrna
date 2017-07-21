import React from 'react'

import {Actions} from 'react-native-router-flux'
import SideBar from './sidebar'


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
    Card,
    CardItem,
    Drawer
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
        posts: [{
          author: 'John Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magnam dolore nesciunt, atque, porro distinctio natus, dignissimos incidunt fuga possimus et quia voluptates dicta tempore voluptatum tenetur odit. Expedita, blanditiis.',
          votes: 100
        },{
          author: 'John Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magnam dolore nesciunt, atque, porro distinctio natus, dignissimos incidunt fuga possimus et quia voluptates dicta tempore voluptatum tenetur odit. Expedita, blanditiis.',
          votes: 100
        },{
          author: 'John Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magnam dolore nesciunt, atque, porro distinctio natus, dignissimos incidunt fuga possimus et quia voluptates dicta tempore voluptatum tenetur odit. Expedita, blanditiis.',
          votes: 100
        },{
          author: 'John Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magnam dolore nesciunt, atque, porro distinctio natus, dignissimos incidunt fuga possimus et quia voluptates dicta tempore voluptatum tenetur odit. Expedita, blanditiis.',
          votes: 100
        },{
          author: 'John Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magnam dolore nesciunt, atque, porro distinctio natus, dignissimos incidunt fuga possimus et quia voluptates dicta tempore voluptatum tenetur odit. Expedita, blanditiis.',
          votes: 100
        }]
    };



    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };


    render() {

        return (
        <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideBar navigator={this.navigator}  />}
            onClose={() => this.closeDrawer()} >
        <Container style={{paddingTop: Expo.Constants.statusBarHeight}}>
          
          <Header>
            <Left>
              <Button onPress={this.openDrawer.bind(this)} transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Mareddit</Title>
            </Body>
            <Right />
          </Header>
          <Content>

          <List dataArray={this.state.posts} renderRow={(item)=>{
            return (


          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{item.author}</Text>
                  <Text note>{item.content}}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="add" />
                </Button>

                <Button transparent>
                  <Icon name="md-remove" />
                </Button>
              </Left>
              <Right>
                <Text>{item.votes} vote</Text>
              </Right>
            </CardItem>
          </Card>


              )
          }}/>



          </Content>
          <Fab onPress={()=>{
            Actions.addpost()
          }}
            style={{ backgroundColor: '#5067FF'}}
            position="bottomRight">
            <Icon name="add" />
          </Fab>



        </Container>
          </Drawer>

        )
      

    }

}
