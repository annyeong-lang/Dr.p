import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as tf from "@tensorflow/tfjs";
import { fetch, bundleResourceIO } from "@tensorflow/tfjs-react-native";
import { useEffect } from "react";
import * as jpeg from "jpeg-js";

export default function Tensorflow() {
  const url = "./26.jpg";
  const getPrediction = async (url) => {
    console.log(url);
  };
  const imageToTensor = (rawData) => {
    const { width, height, data } = jpeg.decode(rawData, true);
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset]; // Red
      buffer[i + 1] = data[offset + 1]; // Green
      buffer[i + 2] = data[offset + 2]; // Blue
      offset += 4; // Skps Alpha Value
    }
    return tf.tensor4d(buffer, [1, height, width, 3]);
  };
  useEffect(() => {
    async function loadModel() {
      console.log("[+] Application started");
      //Wait for tensorflow module to be ready
      const tfReady = await tf.ready();
      console.log("[+] Loading custom mask detection model");
      const modelJson = await require("./model.json");
      const modelWeight = await require("./group1-shard.bin");
      const imageClassifier = await tf.loadLayersModel(
        bundleResourceIO(modelJson, modelWeight)
      );
      const image = require(url);
      const imageAssetPath = Image.resolveAssetSource(image);
      const response = fetch(imageAssetPath.uri, {}, { isBinary: true });
      const imageData = await (await response).arrayBuffer();
      const imageTensor = imageToTensor(imageData);
      const prediction = await imageClassifier.predict(imageTensor);
      const predictions = Array.from(prediction.argMax(1).dataSync());
      console.log(predictions[0]);
    }
    loadModel();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Only works with Jpeg images</Text>
      <Image style={{ width: 200, height: 200 }} source={require(url)} />
      <Button title="predict" onPress={() => getPrediction(url)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
