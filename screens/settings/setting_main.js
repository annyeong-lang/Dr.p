import React from "react"
import { Entypo } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar';
import {Icon,VStack,NativeBaseProvider,IconButton,Divider} from "native-base"
import Name from "./setName"
import Location from "./setLocation"
import Format from "./initialization"
export default () => {
  return (
    <NativeBaseProvider >
    <StatusBar />
    <IconButton ml="7" mt="20" icon={<Icon as={Entypo} name="emoji-happy"></Icon>}></IconButton>
    <VStack mt="8" bg="violet.300">
        <Name />
         <Divider mb="1" />
        <Location />
        <Divider mb="1" />
        <Format />
        <Divider mb="1" />
        </VStack>
    </NativeBaseProvider>
  )
}
