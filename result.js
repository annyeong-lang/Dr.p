import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { dbService } from "./fbase";
import { doc, getDoc } from "firebase/firestore";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Main({ navigation, route }) {
  const [type, setType] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(async () => {
    if (route.params) {
      const docRef = doc(dbService, "acne", `${route.params.acne}`);
      const docSnap = await getDoc(docRef);
      setType(docSnap.data().name);
      setDetail(docSnap.data().description);
    }
  }, []);

  return (
    <View style={Styles.container}>
      <View style={Styles.image}>
        <Image source={require("./noimg.png")}></Image>
      </View>
      <View style={Styles.num}>
        <MaterialCommunityIcons
          name="numeric-1-circle-outline"
          size={24}
          color={type == "면포성 여드름" ? "purple" : "black"}
        />
        <MaterialCommunityIcons
          name="numeric-2-circle-outline"
          size={24}
          color={type == "농포성 여드름" ? "purple" : "black"}
        />
        <MaterialCommunityIcons
          name="numeric-3-circle-outline"
          size={24}
          color={type == "구진성 여드름" ? "purple" : "black"}
        />
        <MaterialCommunityIcons
          name="numeric-4-circle-outline"
          size={24}
          color={type == "결절낭 여드름" ? "purple" : "black"}
        />
      </View>
      <View style={Styles.type}>
        <Text style={{ fontSize: 22 }}>{type}</Text>
      </View>
      <View style={Styles.detail}>
        <Text style={{ lineHeight: 30, fontSize: 20 }}>{detail}</Text>
      </View>
      <View style={Styles.button}>
        <TouchableOpacity
          style={{ backgroundColor: "#8A47EB", borderRadius: 5 }}
        >
          <Text
            style={{ color: "white", fontSize: 18, margin: 10 }}
            onPress={() =>
              navigation.navigate("Carelist", {
                resultId: route.params.id,
                acne: route.params.acne,
              })
            }
          >
            추천 약과 관리 방법
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate("Start")}>
          <Entypo name="clipboard" size={40} color="black" />
          <Text style={{ fontWeight: "bold" }}>진단</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Foundation name="results" size={42} color="black" />
          <Text style={{ fontWeight: "bold" }}>결과</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("drugStoreScreen")}
        >
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={47}
            color="black"
          />
          <Text style={{ fontWeight: "bold" }}>지도</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="setting" size={40} color="black" />
          <Text style={{ fontWeight: "bold" }}>설정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    flex: 3.2,
  },
  num: {
    flex: 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 100,
  },
  type: {
    flex: 0.8,
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    flex: 3.2,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});
