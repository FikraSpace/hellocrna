import React from 'react'
import {Container, Content, Form, Item, Button, Text, Input} from 'native-base'
import {View, TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'


export default class Login extends React.Component{

	goToPosts(){
		Actions.posts()
	}

	goToSignup(){
		Actions.signup()
	}

	render() {
		return(
			<Container style={{ paddingTop: Expo.Constants.statusBarHeight}}>
			<View style={{alignItems:'center', justifyContent:'center', paddingTop: 30}}>
				<Text>MaReddit</Text>
				<View style={{flexDirection:'row'}}>
					<Text>Please Login or </Text>
					<TouchableOpacity onPress={this.goToSignup.bind(this)}><Text style={{color: 'blue'}}>Signup</Text></TouchableOpacity>
				</View>

			</View>
			<Content style={{padding:20}}>
				<Form>
		            <Item>
		              <Input placeholder="Username" />
		            </Item>
		            <Item last>
		              <Input secureTextEntry={true} placeholder="Password" />
		            </Item>
		        </Form>
		        <Button full onPress={this.goToPosts.bind(this)}><Text>Login</Text></Button>
		     </Content>
			</Container>
		)
	}


}