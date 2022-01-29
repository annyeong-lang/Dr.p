import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import{ View, Text, Dimensions, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import CameraRoll from "@react-native-community/cameraroll";


export default function main () {
  return (
    <View style={Styles.container}>
    <StatusBar style="auto" />
      <View style={Styles.main}>
       <Text style={Styles.logo}>
         진단받을 피부 부위 
         {"\n"}사진을 첨부해주세요
       </Text>
       <Text style={Styles.logo2}>밝은 곳에서 피부가 잘 보이도록{"\n"}
사진을 촬영해주세요</Text>
      </View>

      <View style={Styles.btnSpace}>
        <TouchableOpacity style={Styles.bStyle1} >
        <Text style={Styles.btStyle1} >갤러리</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.bStyle2}>
        <Text style={Styles.btStyle2} >카메라</Text></TouchableOpacity>
        
      </View>
    </View>
  );
}



const Styles = StyleSheet.create({
  container : {
      flex:1,
      backgroundColor:"#fff",
    justifyContent: "center", 
   

  },

  logo:
  {
fontSize: 27,
height: '17%',
color:"black",
 marginTop: 60,
 fontWeight:"bold",
    marginStart:20

  },
  logo2:
  {
   marginStart:25

  },

  main:{
      flex: 3,
  },
  btnSpace:
  {
     flexDirection:"row",
     margin:40,
     marginBottom:50,
   alignItems:"center",
    justifyContent: 'space-between',

  },

bStyle1:{

   width:"45%"
   ,height:"50%",


},
bStyle2:{
  width:"45%"
   ,height:"50%"

}
,
  btStyle1:
  {
  
    fontWeight:"500",
     color:"black",
     backgroundColor:"#F2F2F2",
    textAlign:"center",
    textAlignVertical:"center"
    ,borderTopRightRadius:"5px",
    borderBottomLeftRadius:"5px",
    borderBottomRightRadius:"5px",
    borderBottomStartRadius:"5px",
    borderTopLeftRadius:"5px",
  },
   btStyle2:
   {

 fontWeight:"500",
     color:"black",
   
     backgroundColor:"#8A47EB",
    textAlign:"center",
    textAlignVertical:"center"
    ,borderTopRightRadius:"5px",
    borderBottomLeftRadius:"5px",
    borderBottomRightRadius:"5px",
    borderBottomStartRadius:"5px",
    borderTopLeftRadius:"5px"

   }
    
  
})
