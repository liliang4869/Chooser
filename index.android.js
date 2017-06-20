

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Dimensions
} from 'react-native';
var dataList=['1','2','3','4','5','6']
var {height,width}=Dimensions.get('window');
import Chooser from './src/Chooser'
export default class ChooserDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Chooser dataItemStyle={{height:height*0.1,width:width,backgroundColor:'#852369',justifyContent:'center',alignItems:'center'}}>
         {dataList.map((data,index)=> <View style={{justifyContent:'center',width:width*0.8,height:height*0.08,alignItems:'center'}} key={index}><Text style={{fontSize:20}}>{data}</Text></View>)}
       </Chooser>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ChooserDemo', () => ChooserDemo);
