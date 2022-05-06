import { authService } from "./fbase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import * as React from 'react'; 

import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./logo_purple.png")} />
        <Text style={{ fontSize: 30 }}>피부 홈케어의 시작</Text>
      </View>
      <View style={styles.input}>
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
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={async () => {
            try {
              await signInWithEmailAndPassword(authService, email, password);
              navigation.reset({ routes: [{ name: "Home" }] });
            } catch (error) {
              if (error.code == "auth/user-not-found")
                Alert.alert("존재하지 않는 아이디입니다.");
              else if (error.code == "auth/wrong-password")
                Alert.alert("잘못된 비밀번호입니다.");
            }
          }}
        >
          <Text style={styles.btnText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.find}>
        <TouchableOpacity onPress={() => navigation.navigate("Password")}>
          <Text style={{ fontSize: 20 }}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flex: 4.2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    flex: 3,
    justifyContent: "flex-end",
  },
  inputText: {
    width: 300,
    fontSize: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  btn: {
    flex: 1.4,
    flexDirection: "row",
  },
  btnText: {
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#8A47EB",
    borderRadius: 5,
    color: "white",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
  },
  find: {
    flex: 1.4,
  },
});

export default Login;
