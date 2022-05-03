import { dbService } from "../fbase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Fontisto } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

const Carelist = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [care, setCare] = useState([]);
  const [ointment, setOintment] = useState([]);
  const num = [0, 1, 2, 3];
  useEffect(async () => {
    const docRef = doc(dbService, "carelist", `${route.params.acne}`);
    const docSnap = await getDoc(docRef);
    setName(docSnap.data().name);
    setCare(docSnap.data().care);
    setOintment(docSnap.data().isOintment);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.pic}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../noimg.png")}
        />
      </View>
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderTitle}>추천 약과 관리 방법</Text>
          <Text style={styles.listHeaderText}>{name}</Text>
        </View>
        <View style={styles.listBtns}>
          {num.map((num) => {
            return ointment[num] ? (
              <>
                <View style={{ ...styles.listBtn, backgroundColor: "#E4D1FF" }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (route.params) {
                        updateDoc(
                          doc(dbService, "result", `${route.params.resultId}`),
                          { care: care[num] }
                        );
                        Alert.alert("관리법이 변경되었습니다.");
                      }
                    }}
                  >
                    <Fontisto
                      style={{ marginLeft: 20, marginRight: 10 }}
                      name="checkbox-passive"
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Care", { careName: care[num] })
                    }
                  >
                    <Text style={{ fontSize: 22, color: "black" }}>
                      [추천 약] {care[num]}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <View style={{ ...styles.listBtn, backgroundColor: "#8A47EB" }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (route.params) {
                        updateDoc(
                          doc(dbService, "result", `${route.params.resultId}`),
                          { care: care[num] }
                        );
                        Alert.alert("관리법이 변경되었습니다.");
                      }
                    }}
                  >
                    <Fontisto
                      style={{ marginLeft: 20, marginRight: 10 }}
                      name="checkbox-passive"
                      size={20}
                      color="white"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Care", { careName: care[num] })
                    }
                  >
                    <Text style={{ fontSize: 22, color: "white" }}>
                      [관리 방법] {care[num]}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
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
    backgroundColor: "white",
  },
  pic: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 6,
  },
  listHeader: {
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  listHeaderTitle: {
    textAlign: "center",
    fontSize: 30,
  },
  listHeaderText: {
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#F4F4F4",
    marginTop: 20,
    paddingVertical: 10,
  },
  listBtns: {
    marginTop: 10,
    alignItems: "center",
  },
  listBtn: {
    paddingVertical: 10,
    borderRadius: 5,
    width: 350,
    marginBottom: 15,
    flexDirection: "row",
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

export default Carelist;
