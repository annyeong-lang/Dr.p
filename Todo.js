import { authService, dbService } from "./fbase";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Todo = ({ navigation, route }) => {
  const [todo, setTodo] = useState("");
  const addTodo = async () => {
    if (route.params) {
      await updateDoc(doc(dbService, "todo", `${route.params.id}`), {
        text: todo,
      });
    } else {
      const docRef = await addDoc(collection(dbService, "todo"), {
        text: todo,
        createdAt: Date.now(),
        completed: false,
        createdId: authService.currentUser.uid,
      });
    }
    navigation.navigate("Home");
  };
  const deleteTodo = async () => {
    await deleteDoc(doc(dbService, "todo", `${route.params.id}`));
    navigation.navigate("Home");
  };
  useEffect(() => {
    if (route.params) {
      setTodo(route.params.text);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.hText, marginTop: 40 }}>진단 결과에 따라</Text>
        <Text style={styles.hText}>ToDo List를 추가하세요</Text>
      </View>
      <TextInput
        value={todo}
        onChangeText={(text) => setTodo(text)}
        style={styles.textInput}
        placeholder="피부과 예약하기"
      />
      <View style={styles.btns}>
        <TouchableOpacity onPress={addTodo} style={styles.btn}>
          <Text style={styles.btnText}>
            {route.params ? "수정하기" : "추가하기"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            route.params ? deleteTodo : () => navigation.navigate("Home")
          }
          style={styles.btn}
        >
          <Text style={styles.btnText}>삭제하기</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 3,
  },
  hText: {
    marginHorizontal: 20,
    fontSize: 32,
  },
  textInput: {
    flex: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 15,
    fontSize: 20,
    textAlignVertical: "top",
  },
  btns: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    paddingHorizontal: 25,
    marginVertical: 42,
    borderRadius: 5,
    marginHorizontal: 15,
    backgroundColor: "#8A47EB",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
});

export default Todo;
