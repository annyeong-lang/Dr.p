import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./Start";
import analysis from "./analysis";
import result from "./result";
import camera from "./camera";
import selectPicture from "./selectPicture";
import Login from "./Login";
import Password from "./Password";
import SignUp from "./SignUp";
import Home from "./Home";
import Todo from "./Todo";
import Carelist from "./Carelist";
import Care from "./Care";
import drugStoreScreen from "./drugStoreScreen";
import explanation from "./explanation";
import setting_main from "./setting_main";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#8A47EB",
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="analysis"
          component={analysis}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="result"
          component={result}
          options={{ headerShadowVisible: false, title: "진단결과" }}
        />
        <Stack.Screen
          name="camera"
          component={camera}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="selectPicture"
          component={selectPicture}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{ headerShadowVisible: false, title: "" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShadowVisible: false, title: "회원가입" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Todo"
          component={Todo}
          options={{ headerTitleStyle: { color: "white" } }}
        />
        <Stack.Screen
          name="Carelist"
          component={Carelist}
          options={{ headerShadowVisible: false, title: "" }}
        />
        <Stack.Screen
          name="Care"
          component={Care}
          options={{ headerTitleStyle: { color: "white" } }}
        />
        <Stack.Screen
          name="drugStoreScreen"
          component={drugStoreScreen}
          options={{
            title: "",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="explanation"
          component={explanation}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="setting_main"
          component={setting_main}
          options={{
            title: "설정",
            headerStyle: {
              backgroundColor: "#F6F0FF",
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
