import { dbService } from "./fbase";
import { doc, getDoc } from "firebase/firestore";

import { Fontisto } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const Care = ({ route }) => {
  const [care, setCare] = useState({});
  const [ingr, setIngr] = useState([]);
  const [amount, setAmount] = useState([]);
  const num = [0, 1];
  useEffect(async () => {
    const docRef = doc(dbService, "care", route.params.careName);
    const docSnap = await getDoc(docRef);
    setCare(docSnap.data());
    setIngr(docSnap.data().ingr);
    setAmount(docSnap.data().amount);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.pic}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("./noimg.png")}
        />
      </View>
      <View style={styles.info}>
        <ScrollView>
          <Text style={styles.infoHeader}>{care.name}</Text>

          {num.map((num) => {
            return ingr == null ? null : ingr[num] == null ? null : (
              <>
                <View style={styles.infoIngr}>
                  <Text style={styles.infoText}>{ingr[num]}</Text>
                  <Text style={styles.infoText}>{amount[num]}</Text>
                </View>
              </>
            );
          })}
          <View style={{ marginTop: 30, marginHorizontal: 40 }}>
            <Text style={{ fontSize: 20, lineHeight: 35 }}>
              {care.description}
            </Text>
            {ingr == null ? null : (
              <Text style={{ fontSize: 20, lineHeight: 35 }}>
                {"\n"}부작용:{"\n"}
                {care.side}
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('analysis')}>
        <Entypo
            name="clipboard"
            size={40}
            color="black"
            
          />
          <Text style={styles.menuText}>진단</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            signOut(authService);
            navigation.navigate("Login");
          }}>
        <Foundation name="results" size={42} color="black" />
          <Text style={styles.menuText}>결과</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("drugStoreScreen")}>
        <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={47}
            color="black"
            
          />
          <Text style={styles.menuText}>지도</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="setting" size={40} color="black"  onPress={() => navigation.navigate("setting_main")} />
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
  info: {
    flex: 6,
  },
  infoHeader: {
    textAlign: "center",
    fontSize: 30,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  infoIngr: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
  },
  infoText: {
    fontSize: 20,
    paddingHorizontal: 50,
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

export default Care;
