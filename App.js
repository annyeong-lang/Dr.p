import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
 import {createNativeStackNavigator } from '@react-navigation/native-stack'; 
 import start from './start';
  import analysis from './analysis';
  import result from './result';
  import camera from './camera';
  import selectPicture from './selectPicture';
  import Login from "./Login";
import Password from "./Password";
import SignUp from "./SignUp";
import Home from "./Home";
import Todo from "./Todo";
import Carelist from "./Carelist";
import Care from "./Care";
import drugStoreScreen from './drugStoreScreen';
import explanation from './explanation';
import setting_main from './setting_main';
   const Stack = createNativeStackNavigator();
    function App() { return (
       <NavigationContainer> 
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="start" component={start}
        options={{ title: '' }}/>
         <Stack.Screen name="analysis" component={analysis} 
         options={{ title: '' }}/>
                  <Stack.Screen name="result" component={result}
        options={{ title: '' }}/>
        <Stack.Screen name="camera" component={camera}
        options={{ title: '' }}/>
         <Stack.Screen name="selectPicture" component={selectPicture}
        options={{ title: '' }}/>
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
                <Stack.Screen name="drugStoreScreen" component={drugStoreScreen}
        options={{ title: '' }}/>
         <Stack.Screen name="explanation" component={explanation} 
         options={{ title: '' }}/>

<Stack.Screen name="setting_main" component={setting_main} 
         options={{ title: '' }}/>
          </Stack.Navigator>
           </NavigationContainer> ); }

           export default App;
           


