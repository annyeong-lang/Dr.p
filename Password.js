import { authService } from "./fbase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const Password = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const findPW = () => {
    sendPasswordResetEmail(authService, email)
      .then(() => {
        Alert.alert("", "메일이 전송되었습니다.", [
          { onPress: () => navigation.navigate("Login") },
        ]);
      })
      .catch((error) => {
        Alert.alert("가입되지 않은 이메일입니다.");
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>가입하셨던 이메일로</Text>
        <Text style={styles.headerText}>비밀번호 재설정 메일이</Text>
        <Text style={styles.headerText}>전송됩니다.</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="이메일"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={findPW}>
          <Text style={styles.btnText}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 3.5,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 34,
  },
  input: {
    flex: 4,
    alignItems: "center",
  },
  inputText: {
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 20,
    width: 300,
    borderRadius: 5,
  },
  btn: {
    flex: 2.5,
    alignItems: "center",
  },
  btnText: {
    fontSize: 24,
    backgroundColor: "#8A47EB",
    borderRadius: 5,
    color: "white",
    padding: 10,
  },
});

export default Password;
