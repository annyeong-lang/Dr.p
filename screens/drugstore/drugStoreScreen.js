import React from "react"
import Explanation from "./explanation"
import { StatusBar } from 'expo-status-bar';
import { Entypo } from "@expo/vector-icons"
import {Text,Center,NativeBaseProvider,Button,IconButton, Icon,VStack} from "native-base"

function MoreInfo(props){
  return(
    <Center my="4">
    <Button  onPress={() => console.log("hello world")} bg="violet.400" >
    <Text mx="8" my="1" fontSize="xl" color="white">자세히 알아보기</Text>
    </Button></Center> 
  )
}

function Map(props){
  return(
    <Center>
    </Center>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
    <StatusBar>
    </StatusBar>
    <IconButton ml="7" mt="20" icon={<Icon as={Entypo} name="emoji-happy"></Icon>}></IconButton>
    <VStack mt={5}>
    <Explanation name="이화연"/>
    <MoreInfo/>
    </VStack>
    </NativeBaseProvider>
  )
}

