import React from "react"
import {
  Pressable,
  Box,Modal, Button,FormControl,Input
} from "native-base"
import { useState } from "react"
export default function Name() {
  const [showModal, setShowModal] = useState(false)
  return (
      <Pressable
      onPress={() => {
        //database 연결
        //저장 색 바꾸기
      }}
    >
      <Box p="5" rounded="8" bg="violet.300" my="2" py="3">
         <Pressable onPress={() => setShowModal(true)}>
         <Box ml="2" _text={{fontSize:"xl",color:"white"}}>사용자 이름 설정하기</Box></Pressable>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header color="violet.400" >이름을 입력하세요</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="violet"
                onPress={() => {
                  setShowModal(false)
                }}

              > 취소</Button>
              <Button
              colorScheme="violet"
                onPress={() => {
                  setShowModal(false)
                }}
              _text={{color:"white"}}
              > 저장</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </Box>
    </Pressable>
  )
}