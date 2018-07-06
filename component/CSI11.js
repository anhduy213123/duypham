import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    ToastAndroid,StatusBar
}from 'react-native'

import SmallLogo from './Module/SmallLogo'
import Swipers from './Module/Swiper'
import Btn from './Module/Btn'
import{Container, Content, Header, Body, Left, Right,} from 'native-base'
export default class CSI11 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            city:require('../src/images/city.png'),
            book:'ĐẶT XE'
        }
    }
    _Booking(){
        this.props.navigation.navigate('CUI10','')
    }
    render(){
        return(
            <Container>
                <Header style={{backgroundColor:mainColor,height:0,padding:10}}>
                    <Left/>
                    <Body/>
                    <Right/>
                </Header>
                <View style={{flex:1}}>
                    <View style = {styles.viewTOP}>
                        <SmallLogo/>
                    </View>
                    <View style ={styles.viewBOTTOM}>
                        <Swipers/>
                    </View>
                    <View style={styles.ViewButton}>
                        <Btn
                        onPress={()=>{this._Booking()}}
                        text={this.state.book}
                        />
                    </View>
                </View>
            </Container>
        );
    }
}
const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const styles= StyleSheet.create({
    ViewButton:{
        alignItems: 'center',
        // backgroundColor:'red',
        width:'100%'
    },
    viewBOTTOM:{
        flex:1,
        zIndex:1
    },
    viewTOP:{
        height:height*(25/100),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'blue'
    },
    city:{
        width:width,
        height:height*(50/100),
        width:width,
        alignSelf: 'center',
    },
    container:{
        flex:1,
        backgroundColor:'white',
    },
    viewCity:{
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    }
})
