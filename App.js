import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack'; 
 import Main from './main';
  import As from './analysis';
  import Rs from './result';
   const Stack = createStackNavigator();
    function App() { return (
       <NavigationContainer> 
       <Stack.Navigator initialRouteName="Result">
        <Stack.Screen name="Main" component={Main}
        options={{ title: '메인화면' }}/>
         <Stack.Screen name="analysis" component={As} 
         options={{ title: '상세화면' }}/>
         <Stack.Screen name="Result" component={Rs}
        options={{ title: '결과 화면' }}/>
          </Stack.Navigator>
           </NavigationContainer> ); }
           export default App;


