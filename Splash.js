import React, {Component} from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

export default class Splash extends Component {
    render(){
        return(
            <View style={styles.wrapper}>
                <View  style={styles.titleWrapper} >
                    <Image 
                        style={styles.logo}
                        source={require('./img/logo.jpg')} />
                    <Text style={styles.title} >
                        inHome
                    </Text>
                    <Text style={styles.wrapperSubtitle} >
                        Your Services Partner
                    </Text>                    
                </View>
                <View>
                    <Text style={styles.subtitle} >
                        by Dilo Balikpapan
                    </Text>
                </View>
            </View>

        );
    }
}
const styles=StyleSheet.create({
    wrapper:{
        backgroundColor: '#5e9bff',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color: 'white',
        fontSize: 40,
        fontWeight:'bold',
        
    },
    wrapperSubtitle:{
        color :'white',
        fontSize:18
    },
    titleWrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle:{
        fontSize:10,
        color: 'white'   
    },
    logo:{
        width:80,
        height:120
    }
});