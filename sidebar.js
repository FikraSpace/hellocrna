import React from 'react'
import {Text, Button, Container} from 'native-base';
export default class SideBar extends React.Component{
	render() {
		return (
			<Container style={{backgroundColor:'#eee', alignItems:'center', justifyContent:'center',paddingTop: Expo.Constants.statusBarHeight}}>
				<Text style={{margin:10}}>Hello John Doe.</Text>
				<Text style={{margin:10}}>Logout</Text>
			</Container>
		)
	}
}