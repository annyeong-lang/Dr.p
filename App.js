import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Password from "./Password";
import SignUp from "./SignUp";
import Start from "./Start";
import Home from "./Home";
import Todo from "./Todo";
import Carelist from "./Carelist";
import Care from "./Care";
import Analysis from "./Analysis";
import Result from "./Result";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
