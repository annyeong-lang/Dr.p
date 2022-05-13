import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Center,
  HStack,
  VStack,
  NativeBaseProvider,
  IconButton,
  Divider,
  Box,
} from "native-base";
import Format from "./initialization";
import Logout from "./Logout";
import { Text } from "react-native";

const color = "#F6F0FF";

export default function Setting({ navigation }) {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Box bg={color} flex={1}>
        <VStack>
          <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>
            설정
          </Text>
          <Format />
          <Divider mb="1" bg="#8A47EB" />
          <Logout />
          <Divider mb="1" bg="#8A47EB" />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
