import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
    render() {
        return(
            
                <KeyboardAvoidingView style={styles.container} >
                    <View style={styles.logoContainer} >
                        <Image
                            style={styles.logo}
                            source={require('../../../img/logo.jpg')}
                        />
                    </View>
                    <View>
                        <Text style={styles.subtitle} >
                            Silahkan Login
                        </Text>
                    </View>
                    <View >
                        <LoginForm/>
                    </View>
                </KeyboardAvoidingView> 
            
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498db',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width: 80,
        height:120,
    },
    subtitle:{
        fontSize: 16,
        color:'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});