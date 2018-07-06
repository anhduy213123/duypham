import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    ToastAndroid
}from 'react-native'

import Logo from './Module/Logo'
import { Container, Header, Content, Left, Right, Body } from 'native-base';
var timesChangeScreen = 5000;

// Set Time to Change Stack
export default class CSI10 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            logo:require('../src/icons/logo.png'),
            city:require('../src/images/city.png')
        }
    }
    componentWillMount() {
        setTimeout( () => {
          this.props.navigation.navigate('CSI11','')
        },timesChangeScreen)
      }

    render(){
        return(
            <Container>
                <Header style={{backgroundColor:mainColor,height:0,padding:10}}>
                    <Left/>
                    <Body/>
                    <Right/>
                </Header>
                <View style = {styles.container}>
                    <TouchableOpacity onPress={this._changeStack}>
                        <Logo/>
                    </TouchableOpacity>
                    <View style={styles.viewCity}>
                        <Image
                            source={this.state.city}
                            style={styles.city}
                        />
                    </View>
                </View>
            </Container>
        )
    }
}

const {width, height} = Dimensions.get('window')
const mainColor = '#00803f'

const styles= StyleSheet.create({
    viewLogo:{
        width:width-10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40
    },
    viewCity:{
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    city:{
        height:height*(25/100),
        width:width,
        alignSelf: 'center',
    },
    logo:{
        alignItems: 'center',
        height:height*(21/100),
        width:height*(21/100),
    },

    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent: 'space-between',
    },
})
