/*import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

    var NextPage = require('./next');

    var rootPage = React.createClass({
        goDerper: function() {
            this.props.navigator.push({
                title: 'nextPage',
                component: NextPage,
                navigationBarHidden: true,
                passProps: {myElement: 'text'}
            });
        },
        render: function(){
            return(
                <View style={styles.container}>
                    <TouchableHighlight
                        onPress={() => this.goDerper()}>
                        <Text>We must go derper</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    })

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20
        }
    });
    module.exports = rootPage;
    */