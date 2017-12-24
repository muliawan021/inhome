import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Header from './Header.js';
import Dismantle from './Dismantle.js';
import Install from './Install.js';
import Cleaning from './Cleaning.js';
import Freon from './Freon.js';

export default class Detail extends Component{
    render(){
        return(
            <View style={styles.parent} >
                <Header/>
                <Cleaning/>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} >
                        Order
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    parent:{
        flex:1,
        alignItems:'center'
    },
    button:{
        backgroundColor: 'blue',
        height:40,
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:5
        
    },
    buttonText:{
        color:'white'
    }
})