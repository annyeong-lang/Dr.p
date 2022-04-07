import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
 import {createNativeStackNavigator } from '@react-navigation/native-stack'; 
 import Main from './start';
  import As from './analysis';
  import Rs from './result';
  import Camera from './camera';
  import Wp from './withPicture';
  import Sp from './selectPicture';
  import Tf from './Tensorflow';
   const Stack = createNativeStackNavigator();
    function App() { return (
       <NavigationContainer> 
       <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main}
        options={{ title: '' }}/>
         <Stack.Screen name="analysis" component={As} 
         options={{ title: '' }}/>
                  <Stack.Screen name="Result" component={Rs}
        options={{ title: '' }}/>
        <Stack.Screen name="Camera" component={Camera}
        options={{ title: '' }}/>
        <Stack.Screen name="withPicture" component={Wp}
        options={{ title: '' }}/>
         <Stack.Screen name="selectPicture" component={Sp}
        options={{ title: '' }}/>
        <Stack.Screen name="Tensorflow" component={Tf}
        options={{ title: '' }}/>
          </Stack.Navigator>
           </NavigationContainer> ); }
           export default App;
           


