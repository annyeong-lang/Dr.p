import { dbService, stgService } from "./fbase";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { Fontisto } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Carelist = ({ navigation }) => {
  const [name, setName] = useState("");
  const [care, setCare] = useState([]);
  const [url, setUrl] = useState("");
  useEffect(async () => {
    const docRef = doc(dbService, "carelist", "acneBlemish");
    const docSnap = await getDoc(docRef);
    setName(docSnap.data().name);
    setCare(docSnap.data().care);
    const storageRef = ref(stgService, `images/노스카나.jpg`);
    setUrl(await getDownloadURL(storageRef));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.pic}>
        <Image style={{ width: 200, height: 200 }} source={{ uri: url }} />
      </View>
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderTitle}>추천 약과 관리 방법</Text>
          <Text style={styles.listHeaderText}>{name}</Text>
        </View>
        <View style={styles.listBtn}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Care", { careName: care[0] })}
          >
            <Text style={styles.listBtnTextBlack}>[추천 약] {care[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Care", { careName: care[1] })}
          >
            <Text style={styles.listBtnTextBlack}>[추천 약] {care[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Care", { careName: care[2] })}
          >
            <Text style={styles.listBtnText}>[관리 방법] {care[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Care", { careName: care[3] })}
          >
            <Text style={styles.listBtnText}>[관리 방법] {care[3]}</Text>
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
  listBtn: {
    marginTop: 10,
    alignItems: "center",
  },
  listBtnText: {
    width: 350,
    marginBottom: 15,
    fontSize: 22,
    backgroundColor: "#8A47EB",
    paddingVertical: 10,
    borderRadius: 5,
    textAlign: "center",
    color: "white",
  },
  listBtnTextBlack: {
    width: 350,
    marginBottom: 15,
    fontSize: 22,
    borderColor: "#8A47EB",
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 5,
    textAlign: "center",
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

export default Carelist;
