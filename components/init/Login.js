import React, {Component} from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';
import LoginInput from './LoginInput.js';
export default class Login extends Component{
	render(){
		return (
			<View style = {styles.wrapper}>
			<Text style = {styles.textStyle}>Calculate Your BMI:</Text>

			<LoginInput />
			</View>
			
			);
	}
}

const styles = StyleSheet.create({
	wrapper:{
		backgroundColor: '#009688',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyle:{
		color: '#FFFFFF',
		fontSize: 20
	}
});