import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack'; 
 import Main from './start';
  import As from './analysis';
  import Rs from './result';
  import Camera from './camera';
  import Wp from './withPicture';
   const Stack = createStackNavigator();
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
          </Stack.Navigator>
           </NavigationContainer> ); }
           export default App;
           


