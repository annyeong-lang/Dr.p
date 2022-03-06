import { WebView } from "react-native-webview";
import * as Location from "expo-location";
import { View, Text } from "react-native";

export default function App() {
  try {
    Location.requestForegroundPermissionsAsync();
  } catch (error) {
    console.log(error);
  }
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://gee1suu.github.io/getPosition" }}
        geolocationEnabled={true}
        style={{ flex: 1, marginTop: 20, marginRight: 10 }}
      />

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 30, marginVertical: 10 }}>메뉴</Text>
      </View>
    </View>
  );
}
