import React from "react"
import {Container,Text,Box} from "native-base"
export default function Explanation(props) {
  return (
  <Container mt="2" >
    <Box pl="7" py="2">
      <Text fontSize="2xl" color="violet.400">
        <Text bold>{props.name}</Text>님의 위치와 가까운 약국 지도입니다.
      </Text> 
    </Box>
    <Box pl="7">
      <Text fontSize="lg">
      구매를 원하시는 약의 판매여부는
      약국에 문의하시기 바랍니다.
      </Text>
    </Box>
  </Container>
  )
}
