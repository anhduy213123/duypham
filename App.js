import React, {Component}from 'react';

import {StackNavigator} from 'react-navigation';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ToastAndroid,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';
import CSI10 from './component/CSI10'
import CSI11 from './component/CSI11'

const Stack = StackNavigator({
  CSI10 :{
    screen: CSI10,
  },
  CSI11 :{
    screen: CSI11,
  }
},
{
        headerMode:'none'
}
)
const mainColor = '#00803f'
export default Stack;
