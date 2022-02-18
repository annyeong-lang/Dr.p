import React from "react"
import { Entypo } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar';
import {Icon,VStack,NativeBaseProvider,IconButton,Divider} from "native-base"
import Location from "./setLocation"
import Format from "./initialization"
const color="fuchsia.100"
export default () => {
  return (
    <NativeBaseProvider >
    <StatusBar />
    <IconButton ml="7" mt="20" 
      _hover={{
       bg:{color}
       }}
      _pressed={{
      bg:{color}
      }}
      _focus={{
        bg:{color}
        }}
    icon={<Icon as={Entypo} name="emoji-happy"
    ></Icon>}></IconButton>
    <VStack mt="8" bg={color}>
         <Divider mb="1" bg="purple.600"/>
        <Location />
        <Divider mb="1" bg="purple.600"/>
        <Format />
        <Divider mb="1" bg="purple.600"/>
        </VStack>
    </NativeBaseProvider>
  )
}
