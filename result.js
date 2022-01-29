import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import{ View, Text, Dimensions, StyleSheet, ScrollView, Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import CameraRoll from "@react-native-community/cameraroll";


export default function Main () {
  const [type, setType] = useState("면포성 여드름");
  const [detail, setDetail] = useState("여드름의 초기 단계인 면포성 여드름입니다. \n좁쌀 여드름이라고도 하는  이 면포성 여드름은 \n 아직 여드름 초기 단계입니다. "); 

  return (
  <View style={Styles.container}>
 <StatusBar style="auto" />
 <View style={Styles.top}>
 <Text style={Styles.name}>진단결과</Text>
 </View> 
 <View style={Styles.main1}> 
 </View> 
  <View style={Styles.main2}>
  <View style={Styles.submain}>
 <Text style={Styles.typeName}>{type}</Text>
 </View>
 <Text style={Styles.detailStyle}>{detail}</Text>
 </View> 
 <View Style={Styles.midbt}>
 <TouchableOpacity style={Styles.btnStyle} >
 <Text  style={Styles.btntxtStyle}> 추천 약과 관리 방법</Text></TouchableOpacity>
 </View>
 <View style={Styles.bottom}>
 <Text>진단결과</Text>
 </View> 
 
  </View>
  );
}

const Styles = StyleSheet.create({
  container : {
      flex:1,
      backgroundColor:"#fff",
    justifyContent: "center", 
    alignItems: 'center',
        width:"100%"


  },
  name:{
   fontSize:15,
fontWeight: "600",

  },
  top:{
    flex:0.5,
    backgroundColor:"#FFFFFF",
        width:"100%",
            alignItems: 'center',


  },
  main1:{
    flex:0.3,
    backgroundColor:"#FFFFFF",
        width:"100%"

  },
  typeName:
  {
    marginTop:25,
    width:300,
    height:50,
    fontWeight: "300",
   textAlign:"center",
   fontSize:22
  },
  main2:{
    flex:0.7,
    backgroundColor:"white",
    width:"100%",
    alignItems: 'center',
  }
,
detailStyle:{
fontSize:15,
marginTop:70



},
submain:{
    flex:0.5,
    backgroundColor:"#F4F4F3",
    alignItems: 'center',
    justifyContent: "center", 
    width:"100%",


}
,
midbt:
{
  flex:2,
  backgroundColor:"purple",


},
bottom:
{
  flex:0.5
  ,backgroundColor:"yellow",
   alignItems: 'center',
width:"100%"
}
,
 
  btnStyle:
  {width:290,
  height:50,
   textAlign:"center",
    backgroundColor:"#8A47EB"
    ,borderTopRightRadius:"5px",
    borderBottomLeftRadius:"5px",
    borderBottomRightRadius:"5px",
    borderBottomStartRadius:"5px",
    borderTopLeftRadius:"5px",
        alignItems: 'center',
   
  },
  btntxtStyle:
  {
    color:"white",
    fontSize:17
    ,margin:10,
    textAlign:"center",
    marginTop:15
  }
}
)
