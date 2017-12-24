import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Banner from './Banner';
import Service from './Service';
import Header from '../Header';

export default class Dashboard extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Header/>
                <Banner/>
                <Service/>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1
    }
});