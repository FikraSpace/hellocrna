import React from 'react'
import {Container, Content, Form, Item, Button, Text, Input} from 'native-base'
import {View, TouchableOpacity, AsyncStorage} from 'react-native'
import {Actions} from 'react-native-router-flux'


export default class Login extends React.Component{

	constructor(props) {
		super(props);
		
		this.state = {
			emailVal:'',
			passwordVal:''
		}

	}

	async componentWillMount() {
		let token = await AsyncStorage.getItem('token')

		if (token) {
			Actions.posts()
		}
	}

	 goToPosts(){

        // fetch('http://facebook.github.io/react-native/movies.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //     	console.log(responseJson)
        //         // return responseJson.movies;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });




		fetch('https://mareddit.herokuapp.com/api/login', {
			method: 'POST',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
  			},
			body: JSON.stringify({
				email: this.state.emailVal,
				password: this.state.passwordVal
			})
		}).then((response)=>{
			return response.json()
		}).then( async (response)=>{

			if (response.errorCode === 3232) {
				
				await AsyncStorage.setItem('token', response.token)

				let token = await AsyncStorage.getItem('token')
				

				Actions.posts()
				
				console.log(token)

			}


		})

	}

	goToSignup(){
		Actions.signup()
	}

	setPW(val){
		this.setState({
			passwordVal: val
		})
	}

	setEmail(val){
		this.setState({
			emailVal:val
		})
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
		              <Input onChangeText={this.setEmail.bind(this)} placeholder="Email" value={this.state.emailVal} />
		            </Item>
		            <Item last>
		              <Input onChangeText={this.setPW.bind(this)} secureTextEntry={true} placeholder="Password" value={this.state.passwordVal}/>
		            </Item>
		        </Form>
		        <Button full onPress={this.goToPosts.bind(this)}><Text>Login</Text></Button>
		     </Content>
			</Container>
		)
	}


}