/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use-strict'

import Button from './components/Button.js'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import Login from './components/init/Login';
var root = require('./components/root');
export default class cool extends Component {
  constructor(){
    super();

    this.state = {
      height: 0,
      weight: 0
    };
  }
  calcBmi(e){
    var {height, weight} = this.state;
    var h = height.trim() / 100;

    var bmi = (weight / (h*h)).toFixed(2);
    var result;
    if(bmi < 18){
      result = '${bmi} Eat more because you are too thin and boney'
    }else if(bmi < 25){
      result = '${bmi} You good'
    }else if(bmi < 30){
      result = '${bmi} Eat less because you a bit overweight'
    }else{
      result = '${bmi} Holy moly eat less. You too fat'
    }
  }
  render() {
    return (

      <KeyboardAvoidingView behavior='padding' style = {styles.wrapper}>
      <Text style = {styles.textStyle}>Calculate Your BMI:</Text>

      <View style = {styles.cont}>
        <TextInput
          placeholder = "Height"
          onChangeText={(height) => this.setState({height})}
          keyboardType='numeric'
          value={this.state.height}
          ref='height'
          style={styles.input}
          />
        <TextInput
          placeholder = "Weight"
          keyboardType='numeric'
          onChangeText={(weight) => this.setState({weight})}
          value={this.state.weight}
          ref="weight"
          style={styles.input}
          />
        <TouchableOpacity 
          style = {styles.buttonContatiner}
          onPress={this.calcBmi.bind(this)}>
          <Text style = {styles.woah}>CALCULATE</Text>
        </TouchableOpacity>
        <Text style = {styles.result}>
          Your BMI Is:  {this.state.result}
        </Text>
      </View>
      </KeyboardAvoidingView>
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
    fontSize: 20,
    textAlign: 'center'
  },
  input:{
    height: 40,
    width: 250,
    color: '#FFF',
    marginTop: 20,
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
    backgroundColor: '#00897B',
    width: 250
  },
  cont:{
    alignItems: 'center'
  },
  result:{
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 20
  }
});

AppRegistry.registerComponent('cool', () => cool);