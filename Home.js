import { dbService, authService } from "./fbase";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Fontisto } from "@expo/vector-icons";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";

const Home = ({ navigation }) => {
  const userName = authService.currentUser.displayName
    ? authService.currentUser.displayName
    : "사용자";
  const [todos, setTodos] = useState([]);
  const [results, setResults] = useState([]);

  let comNum = 0;
  let allNum = 0;

  useEffect(async () => {
    const q = query(
      collection(dbService, "todo"),
      orderBy("createdAt", "desc")
    );
    const p = query(collection(dbService, "result"), orderBy("date", "desc"));
    onSnapshot(q, (snapshot) => {
      const todoArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todoArr);
    });
    onSnapshot(p, (snapshot) => {
      const resultArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResults(resultArr);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{userName} 님의 피부 기록</Text>
      </View>
      <View style={styles.todo}>
        <View style={styles.todoBox}>
          <View style={styles.todoHeader}>
            <Text style={styles.todoTitle}>Today's Todo list</Text>
            <TouchableOpacity
              style={styles.todoBtn}
              onPress={() => navigation.navigate("Todo")}
            >
              <Text style={styles.btnText}> + 추가 </Text>
            </TouchableOpacity>
          </View>
          <ScrollView persistentScrollbar={true}>
            {todos.map(
              (todo) =>
                todo.userId === authService.currentUser.uid && (
                  <View key={todo.id} style={styles.todoList}>
                    {todo.completed ? (
                      <TouchableOpacity
                        onPress={() => {
                          updateDoc(doc(dbService, "todo", `${todo.id}`), {
                            completed: false,
                          });
                        }}
                      >
                        <Fontisto
                          name="checkbox-active"
                          size={16}
                          color="white"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          updateDoc(doc(dbService, "todo", `${todo.id}`), {
                            completed: true,
                          });
                        }}
                      >
                        <Fontisto
                          name="checkbox-passive"
                          size={16}
                          color="white"
                        />
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Todo", {
                          id: todo.id,
                          text: todo.text,
                        });
                      }}
                    >
                      <Text
                        style={
                          todo.completed ? styles.todoComText : styles.todoText
                        }
                      >
                        {todo.text}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
            )}
          </ScrollView>
          {todos.map((todo) => {
            todo.userId === authService.currentUser.uid && todo.completed
              ? comNum++
              : null;
            todo.userId === authService.currentUser.uid ? allNum++ : null;
          })}
          <View style={{ margin: 10, flexDirection: "row" }}>
            <View style={styles.todoBars}>
              <View style={{ ...styles.todoBar, flex: comNum }}></View>
              <View style={{ flex: allNum - comNum }}></View>
            </View>
            <Text style={{ color: "white", marginLeft: 10, fontSize: 14 }}>
              {allNum == 0 ? "0%" : `${Math.floor((comNum / allNum) * 100)}%`}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.result}>
        <ScrollView>
          {results.map(
            (result) =>
              result.userId === authService.currentUser.uid && (
                <View key={result.id} style={styles.resultbox}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("result", {
                        id: result.id,
                        acne: result.result,
                      })
                    }
                  >
                    <Image
                      style={{
                        margin: 10,
                        width: 124,
                        height: 124,
                      }}
                      source={{
                        uri: `file:///storage/emulated/0/Pictures/Images/${result.fileName}`,
                      }}
                    />
                  </TouchableOpacity>
                  <View style={{ marginLeft: 30 }}>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity
                        onPress={
                          result.status
                            ? async () =>
                                await updateDoc(
                                  doc(dbService, "result", `${result.id}`),
                                  {
                                    status: false,
                                  }
                                )
                            : async () =>
                                await updateDoc(
                                  doc(dbService, "result", `${result.id}`),
                                  {
                                    status: true,
                                  }
                                )
                        }
                      >
                        <Text
                          style={
                            result.status
                              ? {
                                  ...styles.resultStatText,
                                  backgroundColor: "#B49EDD",
                                }
                              : {
                                  ...styles.resultStatText,
                                  backgroundColor: "#834CEA",
                                }
                          }
                        >
                          {result.status ? "관리 완료" : "관리중"}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={async () => {
                          Alert.alert("", "결과를 삭제하시겠습니까?", [
                            { text: "취소" },
                            {
                              text: "삭제",
                              onPress: () =>
                                deleteDoc(
                                  doc(dbService, "result", `${result.id}`)
                                ),
                            },
                          ]);
                        }}
                      >
                        <Fontisto name="trash" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.resultText}>
                      {new Date(result.date).getFullYear()}년{" "}
                      {new Date(result.date).getMonth() + 1}월{" "}
                      {new Date(result.date).getDate()}일
                    </Text>
                    <Text style={styles.resultText}>결과: {result.result}</Text>
                    <Text style={styles.resultText}>관리: {result.care}</Text>
                  </View>
                </View>
              )
          )}
        </ScrollView>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate("Start")}>
          <Entypo name="clipboard" size={40} color="black" />
          <Text style={styles.menuText}>진단</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Foundation name="results" size={42} color="black" />
          <Text style={styles.menuText}>결과</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("drugStoreScreen")}
        >
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={47}
            color="black"
          />
          <Text style={styles.menuText}>지도</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="setting"
            size={40}
            color="black"
            onPress={() => navigation.navigate("setting_main")}
          />
          <Text style={styles.menuText}>설정</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    marginLeft: 20,
  },
  headerText: {
    fontSize: 24,
    marginTop: 30,
  },
  todo: {
    flex: 2.5,
  },
  todoBox: {
    flex: 1,
    backgroundColor: "#8A47EB",
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  todoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  todoTitle: {
    color: "white",
    fontSize: 20,
  },
  todoBtn: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  todoList: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom: 7,
  },
  todoComText: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
    textDecorationLine: "line-through",
  },
  todoText: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  todoBars: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F6F0FF",
    borderRadius: 5,
  },
  todoBar: {
    borderRadius: 5,
    backgroundColor: "#DEC8FF",
  },
  result: {
    flex: 5,
  },
  resultbox: {
    backgroundColor: "#F6F0FF",
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resultStatText: {
    fontSize: 20,
    marginBottom: 8,
    marginRight: 5,
    color: "white",
    textAlign: "center",
    borderRadius: 5,
    paddingVertical: 1,
    width: 100,
  },
  resultText: {
    fontSize: 20,
    marginBottom: 2,
    color: "black",
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  menuText: {
    fontSize: 16,
  },
});

export default Home;
