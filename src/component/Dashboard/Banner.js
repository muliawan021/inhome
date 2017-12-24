import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Banner extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.container} >
                <Image
                    source={require('../../../img/service.jpg')}
                    style={styles.banner}
                />
            </TouchableOpacity>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:3,
        borderBottomColor:'#ccc'
    },

    banner:{
        width:'100%',
        height: 150
    }
});