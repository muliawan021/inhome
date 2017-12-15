import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';

export default class Topbar extends Component{
    render(){
        return(
            <View style={styles.container} >
                <TouchableOpacity style={styles.opacity} >
                   <Image
                        source={require('../../img/menubutton.png')}
                        style={styles.menuButton}
                   />
                </TouchableOpacity>
            </View>
        );
    }
}
const styles=StyleSheet.create({
        container:{
            flexDirection:'row',
            backgroundColor: 'blue',
            height: 40,
            alignItems: 'center'
        },
        opacity:{
            
        },
        menuButton:{
            marginLeft:20
        }
});