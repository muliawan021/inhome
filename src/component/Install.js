import React,{Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Install extends Component{
    render(){
        return(
            <View style={styles.parent} >
                <Text style={styles.text} >
                    Detail Pekerjaan Install
                </Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
  parent:{
      height: 200,
      width: '100%',
      borderWidth:2,
      borderColor:'#ccc'
  },  
  text:{
      color: '#222222'
  }
})