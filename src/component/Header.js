import React, {Component} from 'react';
import {StyleSheet, View, Text,Image } from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Image
                    source={require('../../img/logo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.textLogo} >
                    inHome
                </Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
        container:{
            height:65,
            marginTop:20,
            backgroundColor: 'white',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            padding:20,
            borderBottomWidth:4,
            borderBottomColor:'#ccc',
            width:'100%'
        },
        logo:{
            height:60,
            width:40
        },
        textLogo:{
            fontSize:30,
            marginLeft: 10,
            fontStyle: 'italic',
            color: '#000',
            fontWeight:'bold'
        }
});