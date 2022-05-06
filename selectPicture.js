import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default function App({navigation}) {
  const [getValue, setGetValue] = useState('');
  const [image, setImage] = useState(null);

   useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('img').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setGetValue(value)
      //Setting the value in Text
    );
  };

  return (
    <View style={Styles.container}>
      
          {getValue && (
            <Image
              source={{ uri: getValue }}
              style={{ width: 200, height: 200, alignContent: 'center' }}
            />
          )}
         
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  logo: {
    fontSize: 30,
    height: 50,
    color: 'black',
    marginTop: 60,
    fontWeight: 'bold',
    marginStart: 20,
  },
  logo2: {
    marginStart: 25,
    fontSize: 20,
  },

  main: {
    flex: 3,
  },
  btnSpace: {
    flexDirection: 'row',
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  btStyle: {
    alignItems:'center',
    width: 80,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#8A47EB',
    height:20
  },
  bStyle1: {
    width: 45,
    height: 80,
  },
  bStyle2: {
    width: 45,
    height: 80,
  },
  btStyle1: {
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
  },
  btStyle2: {
    fontWeight: '500',
    color: 'black',
    fontSize: 30,

    backgroundColor: '#8A47EB',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
  },
});