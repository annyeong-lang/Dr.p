import { useState } from "react"
import React from "react"
import {Button,HStack,Center} from "native-base"
import * as Location from 'expo-location';

function perm(){
    var status=Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
     return;
   }  else {return}
  }

 export default function Permission() {
  const [buttonColor,setButtonColor]=useState("gray.400")
  const [is,setIs]=useState("OFF")
  const pressed=()=>{
   if(is==="ON") {
    setButtonColor("gray.500")
    setIs("OFF")}
    else{
      perm()
      setButtonColor("#8A47EB")
      setIs("ON")
    }
  }
    return (
        <HStack>
            <Center p="5" ml="3" mr="12" _text={{fontSize:"xl",color:"#600FD4"}}>위치 서비스 사용</Center>
            <Button onPress={pressed} ml="4" size="lg" mt="3" mb="3"
             _hover={{bg:"#8A47EB"}}
             _pressed={{bg:"#8A47EB"}}
             bg={buttonColor}
             >{is}</Button>
        </HStack>
    );

}