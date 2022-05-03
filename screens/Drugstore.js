import { WebView } from "react-native-webview";
import * as Location from "expo-location";
import { View, Text, Pressable, Linking } from "react-native";

export default function Drugstore() {
  try {
    Location.requestForegroundPermissionsAsync();
  } catch (error) {
    console.log(error);
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginLeft: 10, marginTop: 20, marginBottom: 10 }}>
        <Text style={{ fontSize: 24 }}>사용자의 위치와</Text>
        <Text style={{ fontSize: 24, marginBottom: 5 }}>
          가까운 약국 지도입니다
        </Text>
        <Text style={{ fontSize: 16 }}>구매를 원하시는 약의 판매 여부는</Text>
        <Text style={{ fontSize: 16 }}>직접 문의하시기 바랍니다</Text>
      </View>
      <WebView
        source={{
          uri: "https://gee1suu.github.io/getPosition/",
        }}
        geolocationEnabled={true}
        style={{ flex: 1, marginHorizontal: 10 }}
      />
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Pressable
          onPress={() =>
            Linking.openURL(
              "https://m.map.kakao.com/actions/searchView?q=%EC%A3%BC%EB%B3%80%20%EC%95%BD%EA%B5%AD"
            )
          }
          style={{
            borderWidth: 1,
            borderRadius: 5,
            width: 200,
            backgroundColor: "#8A47EB",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white", marginVertical: 4 }}>
            자세히 알아보기
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
