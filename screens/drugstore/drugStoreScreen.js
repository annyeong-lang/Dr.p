import React from "react"
import Explanation from "./explanation"
import { StatusBar } from 'expo-status-bar';
import { Entypo } from "@expo/vector-icons"
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import {Text,Center,NativeBaseProvider,Button,IconButton, Icon,VStack} from "native-base"

const color="#8A47EB"
function MoreInfo({navigation}){
  return(
    <Center my="4">
    <Button  onPress={() => navigation.navigate('Care')} bg="#8A47EB"
    _hover={{ bg:{color} }}
    _pressed={{ bg:{color} }} >
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

export default function Durgstore({navigation}){
  return (
    <NativeBaseProvider>
    <StatusBar>
    </StatusBar>
    <IconButton ml="7" mt="20"_hover={{ bg:{color} }}
                              _pressed={{ bg:{color} }}
                              onPress={() => navigation.navigate('Home')}
    icon={<Icon as={Entypo} name="emoji-happy"
    ></Icon>}></IconButton>
    <VStack mt={-1}>
    <Explanation name="이화연"/>
    <Center mt ="1" mb="2">
    <MapView style={styles.map} />
    </Center>
    <MoreInfo/>
    </VStack>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width*0.85,
    height: Dimensions.get('window').height*0.48,
  },
});