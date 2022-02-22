import React from "react"
import { Entypo } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar';
import {Icon,VStack,NativeBaseProvider,IconButton,Divider,Box} from "native-base"
//import Permission from "./screens/settings/setLocation"
import Format from "./initialization"

const color="violet.300"

export default function Setting({navigation}){
  return (
    <NativeBaseProvider >
    <StatusBar />
    <Box bg={color} flex={1}>
    <IconButton ml="7" mt="20"_hover={{ bg:{color} }}
                              _pressed={{ bg:{color} }}
                              onPress={() => navigation.navigate('Home')}
    icon={<Icon as={Entypo} name="emoji-happy"
    ></Icon>}></IconButton>
    <VStack>
         <Divider mb="1" bg="purple.600"/>
        <Permission />
        <Divider mb="1" bg="purple.600"/>
        <Format />
        <Divider mb="1" bg="purple.600"/>
        </VStack>
        </Box>
    </NativeBaseProvider>
  )
}
