import React from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {Center,HStack,VStack,NativeBaseProvider,IconButton,Divider,Box} from "native-base"
import Permission from "./setLocation"
import Format from "./initialization"

const color="#F6F0FF"

export default function Setting({navigation}){
  return (
    <NativeBaseProvider >
    <StatusBar />
    <Box bg={color} flex={1}>
    <VStack>
         <Divider mb="1" bg="#8A47EB"/>
        <Permission />
        <Divider mb="1" bg="#8A47EB"/>
        <Format />
        <Divider mb="1" bg="#8A47EB"/>
        </VStack>
        </Box>
    </NativeBaseProvider>
  )
}