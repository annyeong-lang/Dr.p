import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Password from "./screens/Password";
import SignUp from "./screens/SignUp";
import Start from "./screens/Start";
import Home from "./screens/Home";
import Todo from "./screens/Todo";
import Carelist from "./screens/Carelist";
import Care from "./screens/Care";
import Analysis from "./screens/Analysis";
import Result from "./screens/Result";
import Drugstore from "./screens/Drugstore";
import Setting from "./screens/Setting";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{ headerTitleStyle: { color: "white" } }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerTitleStyle: { color: "white" } }}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Analysis"
          component={Analysis}
          options={{ headerTitleStyle: { color: "white" } }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerTitleStyle: { color: "white" } }}
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
          options={{ headerTitleStyle: { color: "white" } }}
        />
        <Stack.Screen
          name="Care"
          component={Care}
          options={{ headerTitleStyle: { color: "white" } }}
        />
        <Stack.Screen
          name="Drugstore"
          component={Drugstore}
          options={{ headerTitleStyle: { color: "white" } }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerTitleStyle: { color: "white" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
