import React from "react";
import { Pressable, Box } from "native-base";
import { authService } from "./fbase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const color = "#F6F0FF";

export default function Logout({}) {
  const navigation = useNavigation();
  return (
    <Pressable>
      <Box p="5" rounded="8" bg={color}>
        <Pressable
          onPress={() => {
            signOut(authService);
            navigation.navigate("Login");
          }}
        >
          <Box ml="2" _text={{ fontSize: "xl", color: "#8A47EB" }}>
            로그아웃
          </Box>
        </Pressable>
      </Box>
    </Pressable>
  );
}
