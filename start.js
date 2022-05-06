import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import{ View, Text, Dimensions, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


export default function start ({ navigation }) {
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
        <TouchableOpacity onPress={() => navigation.navigate('analysis')}>
        <Text style={Styles.bStyle1} >진단 시작</Text>
        </TouchableOpacity>
     

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={Styles.bStyle1} >피부 기록 보기</Text></TouchableOpacity>
        
      </View>
    </View>
  );
}

function goMainScreen(){ this.props.navigation.navigate('analysis'); } 


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
fontWeight: '500',
height: 50,
textAlign: 'center',
color:"white",
 marginTop: 170,
  },
  text:
  {
   textAlign: 'center',
   color:"white",
 marginTop: 160,
 fontWeight:'700',
 fontSize:20

  },

  main:{
      flex: 3
  },
  btnSpace:
  {
    margin:70,
   flex:1,
   marginTop:240,
  justifyContent: 'space-between',
  },
  bStyle1:
  {
    fontSize:22,
    fontWeight:'300',
     color:"black",
     width: 160,
     height: 40,
     backgroundColor:"white",
    textAlign:"center",
    textAlignVertical:"center"
    ,borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderBottomStartRadius:5,
    borderTopLeftRadius:5
  },
    
  
})
