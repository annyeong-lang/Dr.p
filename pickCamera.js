import React from 'react';
import {Text,View,} from 'react-native';
import {RNCamera} from 'react-native-camera';

const App = () => {

  return(
    <View>
      <Text>Hello.</Text>
      <RNCamera style={{width:300, height: 300}} captureAudio={false}/>
    </View>
  );
}

export default App;