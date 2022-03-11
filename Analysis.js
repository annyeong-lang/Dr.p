import { Text, TouchableOpacity, View } from "react-native";

const Analysis = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 50 }}>Analysis</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Result")}
        style={{ marginTop: 20 }}
      >
        <Text
          style={{
            fontSize: 24,
            backgroundColor: "violet",
            padding: 5,
            borderRadius: 5,
          }}
        >
          진단 시작하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Analysis;
