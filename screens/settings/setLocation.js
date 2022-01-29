import React from "react"
import {Text,HStack,Switch,} from "native-base"
import { useState } from "react"

export default function Location() {
 return(
   //
   //
   //위치 서비스 사용 토글 하기 
   //
   //
     <HStack alignItems="center" space={120} ml="7" py="4">
      <Text fontSize="xl" color="white">위치 서비스 사용</Text>
      <Switch size="md" 
       offTrackColor="white"
        onTrackColor="violet.500"
        onThumbColor="white"
        offThumbColor="violet.500"/>
    </HStack>
 )
}
