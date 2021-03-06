import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { authService, dbService } from "./fbase";
import { addDoc, collection } from "firebase/firestore";
import * as MediaLibrary from "expo-media-library";
import * as FS from "expo-file-system";

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = React.useRef(null);
  const [imgUri, setImgUri] = useState(null);
  const [cameraRollPer, setCameraRollPer] = useState(false);
  const [results, setResults] = useState();

  const toServer = async (mediaFile) => {
    let schema = "http://";
    let host = "3.39.23.209";
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

    navigation.navigate("result", {
      acne: num,
      id: docRef.id,
    });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const getPicture = async () => {
    if (cameraRef) {
      const result = await cameraRef.current.takePictureAsync();
      setImgUri(result.uri);
      setResults(result);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (imgUri === null)
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Camera
            style={{
              height: 580,
              width: 430,
            }}
            captureAudio={false}
            type={type}
            ref={cameraRef}
          ></Camera>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={getPicture}
          >
            <View
              style={{
                borderWidth: 2,
                borderRadius: 70 / 2,
                borderColor: "lightgrey",
                height: 70,
                width: 70,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 60 / 2,
                  borderColor: "lightgrey",
                  height: 60,
                  width: 60,
                  backgroundColor: "white",
                }}
              ></View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}> </Text>
          </TouchableOpacity>
        </View>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>진단받을 피부 부위</Text>
      <Text style={{ fontSize: 30 }}>사진을 첨부해주세요</Text>
      <Text style={{ fontSize: 20 }}>밝은 곳에서 피부가 잘 보이도록</Text>
      <Text style={{ fontSize: 20 }}>사진을 촬영해주세요</Text>
      <Image
        style={{
          height: 200,
          width: 200,
        }}
        source={{ uri: imgUri }}
      />
      <Pressable
        onPress={async () => {
          await toServer({
            type: results.type,
            base64: results.base64,
            uri: results.uri,
          });
        }}
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
          <Pressable
            style={{ ...styles.pBtn, marginHorizontal: 10 }}
            onPress={() => navigation.navigate("camera")}
          >
            <Text style={{ fontSize: 20, margin: 5, color: "white" }}>
              카메라
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: 300,
    height: 400,
  },
  buttonContainer: {
    flex: 0.23,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-between",
  },
  button: {
    marginBottom: 83,

    backgroundColor: "#8A47EB",
    flex: 0.3,
    alignSelf: "flex-end",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
  },
  btStyle: {
    alignItems: "center",
    width: "80%",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: "#8A47EB",
    height: "20%",
  },
  button1: {
    backgroundColor: "#8A47EB",
    flex: 0.3,
    alignSelf: "flex-end",
    alignItems: "center",
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  logo: {
    fontSize: 30,
    height: 50,
    color: "black",
    marginTop: 60,
    fontWeight: "bold",
    marginStart: 20,
  },
  logo2: {
    marginStart: 25,
    fontSize: 20,
  },

  main: {
    flex: 3,
  },
  btnSpace: {
    flexDirection: "row",
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "space-between",
  },

  bStyle1: {
    width: 45,
    height: 100,
  },
  bStyle2: {
    width: 45,
    height: 100,
  },
  btStyle1: {
    fontSize: 30,
    fontWeight: "500",
    color: "black",
    backgroundColor: "#F2F2F2",
    textAlign: "center",
    textAlignVertical: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
  },
  btStyle2: {
    fontWeight: "500",
    color: "black",
    fontSize: 30,

    backgroundColor: "#8A47EB",
    textAlign: "center",
    textAlignVertical: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
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
