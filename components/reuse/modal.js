import React, {Component} from 'react';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';

export default class LoginInput extends Component{
	render(){
		return (
			<Modal
			visible={visisble}
			transparent={false}
			animationType="slide"
			onRequestClose={() => {}}>
				<View>
					<Text>
					</Text>

					<TouchableOpacity onPress={onAccept}>
					<Text style = {styles.woah}>CALCULATE ANOTHER BMI</Text>
					</TouchableOpacity>
				</View>
			</Modal>
			);
	}
}

const styles = StyleSheet.create({
	cont:{
		padding: 40
	},
	

});