import { StyleSheet, View, Text } from "react-native";

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Setting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
