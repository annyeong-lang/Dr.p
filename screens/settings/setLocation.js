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
      setButtonColor("#600FD4")
      setIs("ON")
    }
  }
    return (
        <HStack>
            <Center p="5" ml="3" mr="12" _text={{fontSize:"xl",color:"#8A47EB"}}>위치 서비스 사용</Center>
            <Button onPress={pressed} ml="4" size="lg" mt="3" mb="3"
             _hover={{bg:{buttonColor}}}
             _pressed={{bg:{buttonColor}}}
             bg={buttonColor}
             >{is}</Button>
        </HStack>
    );
};