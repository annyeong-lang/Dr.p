import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { dbService } from "../fbase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";

const Result = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(async () => {
    if (route.params) {
      const docRef = doc(dbService, "acne", `${route.params.acne}`);
      const docSnap = await getDoc(docRef);
      setName(docSnap.data().name);
      setDescription(docSnap.data().description);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <View style={styles.pic}></View>
        <View style={styles.hello}>
          <Text style={styles.title}>{name}</Text>
          <Text
            style={{
              fontSize: 20,
              marginVertical: 25,
              marginHorizontal: 30,
              lineHeight: 35,
            }}
          >
            {description}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Carelist", {
                resultId: route.params.id,
                acne: route.params.acne,
              })
            }
            style={{ alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 24,
                backgroundColor: "orange",
                borderRadius: 5,
                padding: 5,
              }}
            >
              추천 약과 관리 방법 보기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Fontisto name="applemusic" size={24} color="black" />
          <Text style={styles.menuText}>진단</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto name="applemusic" size={24} color="black" />
          <Text style={styles.menuText}>결과</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto name="applemusic" size={24} color="black" />
          <Text style={styles.menuText}>지도</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto name="applemusic" size={24} color="black" />
          <Text style={styles.menuText}>설정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  result: {
    flex: 9,
  },
  name: {
    fontSize: 25,
    textAlign: "center",
  },
  pic: {
    flex: 3.5,
    backgroundColor: "orange",
  },
  hello: {
    flex: 6.5,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 20,
    backgroundColor: "#F4F4F4",
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

export default Result;
