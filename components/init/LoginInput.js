import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class LoginInput extends Component{
	render(){
		return (
			<View style = {styles.cont}>
				<TextInput
					placeholder = "Height"
					style={styles.input}
					/>
				<TextInput
					placeholder = "Weight"
					style={styles.input}
					/>
				<TouchableOpacity style = {styles.buttonContatiner}>
					<Text style = {styles.woah}>CALCULATE</Text>
				</TouchableOpacity>

			</View>
			);
	}
}

const styles = StyleSheet.create({
	cont:{
		padding: 40
	},
	input:{
		height: 40,
		width: 250,
		color: '#FFF',
		marginBottom: 20,
		paddingHorizontal: 10,
		backgroundColor: 'rgba(255,255,255,0.2)'
	},
	woah:{
		textAlign: 'center',
		color: '#FFFFFF',
		padding: 10
	},
	buttonContatiner:{
		backgroundColor: '#00897B'
	}


});