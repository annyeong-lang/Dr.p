import React from "react";
import { Pressable, Modal, Button, Box } from "native-base";
import { useState } from "react";
import { authService, dbService } from "./fbase";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
const color = "#F6F0FF";

export default function Format() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  async function deleted(collection_name) {
    const userId = authService.currentUser.uid;
    const q = query(
      collection(dbService, collection_name),
      where("userId", "==", userId)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      deleteDoc(doc(dbService, collection_name, docs.id));
    });
  }

  return (
    <Pressable>
      <Box p="5" rounded="8" bg={color}>
        <Pressable onPress={() => setShowModal(true)}>
          <Box ml="2" _text={{ fontSize: "xl", color: "#8A47EB" }}>
            진단 결과 초기화 하기
          </Box>
        </Pressable>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header color={color}>진단결과 초기화</Modal.Header>
            <Modal.Body>
              <Box>초기화 후에는 되돌릴 수 없습니다.</Box>
              <Box>계속 진행 하시겠습니까?</Box>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="violet"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  아니요
                </Button>
                <Button
                  colorScheme="violet"
                  onPress={async () => {
                    await deleted("result");
                    await deleted("todo");
                    setShowModal(false);
                    navigation.navigate("Home");
                  }}
                  _text={{ color: "white" }}
                  px="4"
                >
                  네
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Box>
    </Pressable>
  );
}
