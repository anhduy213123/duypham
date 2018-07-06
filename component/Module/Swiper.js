import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import Swiper from 'react-native-swiper';

var dataSource=[];

export default class Swipers extends Component {
    constructor (props){
        super(props)
        this.state={

            br:require('../../src/images/city.png'),

            content:'Nội dung và chức năng',

            vRadar:'',
            vBike:'',
            vCar:'',
            vTour:'',

            descBike:'',
            descCar:'',
            descTour:'',
            descV:'',


            vTour_bus:'',

            srcBike:require('../../src/images/vbike.png'),
            srcCar:require('../../src/images/vcar.png'),
            srcTour:require('../../src/images/vtour.png'),
            srcBus:require('../../src/images/vtour_bus.png'),

        }

    }
    _getCountry(){


    }

    componentWillMount(){
        setTimeout( () => {
        fetch("http://dev.vrada.vn/api/rest/v1/masterdata-service-div", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key':'a21f355a5a8ebf9927ac247836dcfd9477ddff037b62d1558fe06d735eb04f5eee37ff3f04f2c05f02edba1f3728d7426dde567764b62972efd5e673f7cf8a26',
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                const dataResponse = JSON.stringify(responseData)
                const parsed= JSON.parse(dataResponse);
                dataSource= parsed;
                this.setState({dataSource:parsed})
            })
            .then(()=>{
                var length = 0;
                for( var key in dataSource.data ) {
                   switch(dataSource.data[key].id){
                    case 1 :{
                        this.setState({vRadar:dataSource.data[2].srv_div})
                        this.setState({descV:dataSource.data[2].srv_div})
                        break;
                    }
                    case 2 :{
                        this.setState({vBike:dataSource.data[0].srv_div})
                        this.setState({descBike:dataSource.data[0].srv_div})
                        break;
                    }
                    case 3 :{
                        this.setState({vCar:dataSource.data[1].srv_div})
                        this.setState({descCar:dataSource.data[1].srv_div})
                        break;
                    }
                    case 4 :{
                        this.setState({vTour:dataSource.data[3].srv_div})
                        this.setState({descTour:dataSource.data[3].srv_div})
                        break;
                    }
                   }
                }
            })
            .done();
          },1)



    }
  render(){
    return (
        <View style={styles.container}>
            <Swiper
            dot={<View
                style={{
                    backgroundColor: activeDot,
                    width: 10,
                    height: 10,
                    borderRadius: 7,
                    marginLeft: 7,
                    marginRight: 7,
                alignSelf:'center' ,
                marginBottom:30,

                }} />}
            activeDot={<View style={{
                backgroundColor: mainColor,
                width: 10,
                height: 10,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
                marginBottom:30,
                alignSelf:'center' ,
            }} />}
            showsPagination={true}
            style={styles.wrapper}
            showsButtons={false}>

                <ViewSilde
                    lineOne={this.state.vRadar}
                    content={this.state.descV}
                />

                <ViewSilde
                    lineOne={this.state.vBike}
                    imageInside={this.state.srcBike}
                    content={this.state.descBike}
                />

                <ViewSilde
                    lineOne={this.state.vCar}
                    imageInside={this.state.srcCar}
                    content={this.state.descCar}
                />

                <ViewSilde
                    lineOne={this.state.vTour}
                    imageInside={this.state.srcTour}
                    content={this.state.descTour}
                />



            </Swiper>
        </View>
    );
  }
}

class ViewSilde extends React.Component{
    constructor(props){
        super(props)
        this.state={
            br:require('../../src/images/city.png'),
            }
    }
    render(){
        return(
            <View style={styles.viewSilde}>
                    <ImageBackground
                        source={this.state.br}
                        style={styles.slide1}>
                        <Image
                            resizeMode='contain'
                            style={styles.imageInsideSilde}
                            source={this.props.imageInside}
                        />
                    </ImageBackground>
                    <View style={styles.viewtxtSilde}>
                        <Text style={styles.text}>{this.props.lineOne}</Text>
                        <Text style={styles.content}>{this.props.content}</Text>
                    </View>
                </View>
        );
    }
}
class ViewSildeFunction extends React.Component{
    constructor(props){
        super(props)
        this.state={
            br:require('../../src/images/city.png'),
            }
    }
    render(){
        return(
            <View style={styles.viewSilde}>
                    <ImageBackground
                        source={this.state.br}
                        style={styles.slide1}>
                        <Image
                            style={styles.imageInsideSilde}
                            source={this.props.imageInside}
                        />
                    </ImageBackground>
                    <View style={styles.viewtxtSilde}>
                        <Text style={styles.text}>{this.props.lineOne}</Text>
                        <Text style={styles.content}>{this.props.content}</Text>
                    </View>
                </View>
        );
    }
}
const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const activeDot = '#DADADA'
const styles = StyleSheet.create({
    imageInsideSilde:{
        height:50,
        width:100
    },
    container:{
        height:height*(2/3),
        justifyContent: 'center',
    },
    wrapper: {
        // backgroundColor:'red',
        height:200
    },
    viewSilde:{
        height:height*(30/100),
        // backgroundColor:'yellow'
    },
    viewtxtSilde:{
        width:width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide1: {
      height:height*(2/5),
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    slide2: {
        height:400,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide3: {
        height:400,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {

      color: mainColor,
      fontSize: 28,
      fontWeight: 'bold',
      marginTop:10
    },
    content:{
        color: 'black',
      fontSize: 20,
      marginTop:10
    },
  })
