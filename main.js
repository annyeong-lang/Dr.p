import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import{ View, Text, Dimensions, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function main () {
  return (
    <View style={Styles.container}>
    <StatusBar style="auto" />
      <View style={Styles.main}>
       <Text style={Styles.logo}>
         DR.P
       </Text>
       <Text style={Styles.text}>
       피부 홈케어의 시작
       </Text>
      </View>

      <View style={Styles.btnSpace}>
        <TouchableOpacity onPress={() => this.goMainScreen()}>
        <Text style={Styles.bStyle1} >진단 시작</Text>
        </TouchableOpacity>
      <br/>

        <TouchableOpacity>
        <Text style={Styles.bStyle1} >피부 기록 보기</Text></TouchableOpacity>
        
      </View>
    </View>
  );
}

function goMainScreen(){ this.props.navigation.navigate('As'); } 


const Styles = StyleSheet.create({
  container : {
      flex:1,
      backgroundColor:"#8A47EB",
    justifyContent: "center", alignItems: "center"


  },

  logo:
  {
justifyContent:"center",
fontSize: 100,
fontWeight: "500",
height: '50px',
textAlign: 'center',
color:"white",
 marginTop: 170,
  },
  text:
  {
   textAlign: 'center',
   color:"white",
 marginTop: 160,
 fontWeight:"700",

  },

  main:{
      flex: 3
  },
  btnSpace:
  {
    margin:40,
   flex:1,
   marginTop:80,
  },
  bStyle1:
  {
    fontWeight:"500",
     color:"black",
     width: '130px',
     height: '30px',
     backgroundColor:"white",
    textAlign:"center",
    textAlignVertical:"center"
    ,borderTopRightRadius:"5px",
    borderBottomLeftRadius:"5px",
    borderBottomRightRadius:"5px",
    borderBottomStartRadius:"5px",
    borderTopLeftRadius:"5px"
  },
    
  
})
