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

export default class SmallLogo extends React.Component{
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
    },
    logo:{
        height:height*(15/100),
        width:height*(15/100),
        alignSelf: 'center',
    },
    txt:{
        color:mainColor,
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',

    },
})
