import React,{Component} from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
}from 'react-native'

export default class Btn extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    render(){
        return(
            <TouchableOpacity 
                style ={styles.viewBtn}
                onPress ={this.props.onPress}
            >
                <Text style={styles.txtButton}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}
const {width,height} = Dimensions.get('window')
const defaultWidth = width-48;
const mainColor='#008D44'
const colorTXT = 'white'
const styles = StyleSheet.create({
    viewBtn:{
        width:width-20,
        height:height*(8/100),
        backgroundColor:mainColor,
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:5,
        alignSelf: 'center',
    },
    txtButton:{
        color:colorTXT,
        fontWeight: 'bold',
        fontSize:20
    },
})