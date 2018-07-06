import React, {Component } from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ToastAndroid
}from 'react-native';

export default class Logo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            logo:require('../../src/icons/logo.png'),
            txt:"SMART TRAFFIC"

        }
    }
    render(){
        return(
            <View style={styles.container}>
                 <Image
                    source={this.state.logo}
                    style={styles.logo}
                />
                <Text style={styles.txt}>
                    {this.state.txt}
                </Text>
            </View>
        );
    }
}
const mainColor = '#00803f'

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        width:width-10,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: height*(10/100),

    },
    logo:{
        height:height*(17/100),
        width:height*(17/100),
        },
    txt:{
        color:mainColor,
        fontWeight: 'bold',
        fontSize: 20,
    },
})
