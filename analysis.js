import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import * as FS from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { authService, dbService } from "./fbase";
import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import * as React from 'react'; 

const Analysis = ({ navigation }) => {
  const [cameraRollPer, setCameraRollPer] = useState(false);

  useEffect(async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync().then(() =>
      setCameraRollPer(true)
    );
  }, []);

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
    });
    if (result.cancelled) {
      return;
    } else {
      await toServer({
        type: result.type,
        base64: result.base64,
        uri: result.uri,
      });
    }
  };

  const toServer = async (mediaFile) => {
    let schema = "http://";
    let host = "192.168.35.163";
    let port = "5000";
    let url = "";
    let content_type = "image/jpeg";
    url = schema + host + ":" + port;

    let response = await FS.uploadAsync(url, mediaFile.uri, {
      headers: {
        "content-type": content_type,
      },
      httpMethod: "POST",
      uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
    });
    let num = response.body.toString().slice(1, 2);
    switch (num) {
      case "1":
        num = "면포성 여드름";
        break;
      case "2":
        num = "농포성 여드름";
        break;
      case "3":
        num = "구진성 여드름";
        break;
      case "4":
        num = "결절낭 여드름";
        break;
      default:
        console.log("ERROR!!!");
    }

    let filename = "";

    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.granted) {
      const asset = await MediaLibrary.createAssetAsync(mediaFile.uri);
      filename = asset.filename;
      MediaLibrary.createAlbumAsync("Images", asset, false).then(() =>
        console.log("성공")
      );
    }

    const docRef = await addDoc(collection(dbService, "result"), {
      care: "",
      date: Date.now(),
      result: num,
      status: false,
      userId: authService.currentUser.uid,
      fileName: filename,
    });

    navigation.navigate("Result", {
      acne: num,
      id: docRef.id,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>진단받을 피부 부위</Text>
      <Text style={{ fontSize: 30 }}>사진을 첨부해주세요</Text>
      <Text style={{ fontSize: 20 }}>밝은 곳에서 피부가 잘 보이도록</Text>
      <Text style={{ fontSize: 20 }}>사진을 촬영해주세요</Text>
      <Image source={require("./noimg.png")} />
      <Pressable
        onPress={() => navigation.navigate("Result")}
        style={styles.pBtn}
      >
        <Text style={{ fontSize: 20, margin: 5, color: "white" }}>
          진단 시작하기
        </Text>
      </Pressable>
      {cameraRollPer ? (
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Pressable
            onPress={pickMedia}
            style={{ ...styles.wBtn, marginHorizontal: 10 }}
          >
            <Text style={{ fontSize: 20, margin: 5 }}>갤러리</Text>
          </Pressable>
          <Pressable style={{ ...styles.pBtn, marginHorizontal: 10 }} onPress={() => navigation.navigate('camera')}>
            <Text style={{ fontSize: 20, margin: 5, color: "white" }}>
              카메라
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pBtn: {
    backgroundColor: "#8A47EB",
    borderRadius: 5,
  },
  wBtn: {
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
  },
});

export default Analysis;
