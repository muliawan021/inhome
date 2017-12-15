import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class LoginForm extends Component{
    render(){
        return(
            <View style={styles.container} >
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Username or Email'
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    returnKeyType="go"
                />
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText} >
                        Login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.text} >
                    Belum Punya Account?
                </Text>
                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.buttonText} >
                        Sign Up
                    </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        color:'#FFF',
        paddingHorizontal:10,
        width: 200
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        height:40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontWeight: 'bold',
        color:'white'

    },
    text:{
        color: 'white',
        fontSize: 12
    }
});