import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default class Service extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.service} >
                    <Image
                        style={styles.image}
                        source={require('../../img/cuci.jpg')}
                    />
                    <Text style={styles.text} >
                        Cuci AC
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.service} >
                    <Image
                        style={styles.image}
                        source={require('../../img/dismantle.png')}
                    />
                    <Text style={styles.text} >
                        Dismantle
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.service} >
                    <Image
                        style={styles.image}
                        source={require('../../img/freon.png')}
                    />
                    <Text style={styles.text} >
                        Fill Freon
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.service} >
                    <Image
                        source={require('../../img/install.jpg')}
                        style={styles.image}
                    />
                    <Text style={styles.text} >
                        Instalasi
                    </Text>
                </TouchableOpacity>                
            </View>
            
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%'
    },
    service:{
        width:'25%',
        padding:2,
        height:'50%',
        borderWidth:1,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:'80%',
        width:'100%'
    },
    text:{
        backgroundColor:'white',
        color:'#111'
    }
});