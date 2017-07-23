import React from 'react'
import {AsyncStorage} from 'react-native'
import {Text, Button, Container} from 'native-base';
import {Actions} from 'react-native-router-flux'

export default class SideBar extends React.Component{
	render() {
		return (
			<Container style={{backgroundColor:'#eee', alignItems:'center', justifyContent:'center',paddingTop: Expo.Constants.statusBarHeight}}>
				<Text style={{margin:10}}>Hello John Doe.</Text>
				<Text onPress={()=>{
					AsyncStorage.removeItem('token')
					Actions.login()
				}} style={{margin:10}}>Logout</Text>
			</Container>
		)
	}
}