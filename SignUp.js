import { authService } from "./fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import * as React from 'react'; 

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="이메일"
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        style={styles.inputText}
        placeholder="비밀번호"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <TextInput
        style={styles.inputText}
        placeholder="사용자 이름"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      ></TextInput>
      <TouchableOpacity
        onPress={async () => {
          try {
            await createUserWithEmailAndPassword(authService, email, password);
          } catch (error) {
            if (error.code == "auth/weak-password")
              Alert.alert("비밀번호는 6자 이상이어야 합니다.");
            else if (error.code == "auth/invalid-email")
              Alert.alert("잘못된 이메일 형식입니다.");
          }
          await updateProfile(authService.currentUser, {
            displayName: userName,
          });
          await signInWithEmailAndPassword(authService, email, password);
          navigation.reset({ routes: [{ name: "start" }] });
        }}
      >
        <Text style={styles.btn}>등록하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputText: {
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 20,
    width: 300,
    borderRadius: 5,
  },
  btn: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    backgroundColor: "#8A47EB",
    borderRadius: 5,
    padding: 10,
    marginTop: 50,
  },
});

export default SignUp;
