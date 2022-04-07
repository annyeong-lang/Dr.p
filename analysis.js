import React, { useState, useEffect } from 'react';
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from '@react-native-firebase/storage';


export default function ImagePickerExample({ navigation }) {
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

 function uploadImageToStorage (path, imageName)  {
    let reference = storage().ref(imageName);         // 2
    let task = reference.putFile(path);               // 3

    task.then(() => {                                 // 4
        console.log('Image uploaded to the bucket!');
    }).catch((e) => console.log('uploading image error => ', e));
}
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
      uploadImageToStorage('/images/',uri);
      
    }
  };
  if (image === null)
    return (
      <View style={Styles.container}>
        <View style={Styles.main}>
          <Text style={Styles.logo}>
            진단받을 피부 부위
            {'\n'}사진을 첨부해주세요
          </Text>
          <Text style={Styles.logo2}>
            밝은 곳에서 피부가 잘 보이도록{'\n'}
            사진을 촬영해주세요
          </Text>
        </View>
        <View style={Styles.btnSpace}>
          <TouchableOpacity style={Styles.bStyle1} onPress={pickImage}>
            <Text style={Styles.btStyle1}>갤러리</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.bStyle2}>
            <Text
              style={Styles.btStyle2}
              onPress={() => navigation.navigate('Camera')}>
              카메라
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );

  return (
    <View style={Styles.container}>
      <View style={Styles.main}>
        <Text style={Styles.logo}>
          진단받을 피부 부위
          {'\n'}사진을 첨부해주세요
        </Text>
        <Text style={Styles.logo2}>
          밝은 곳에서 피부가 잘 보이도록{'\n'}
          사진을 촬영해주세요
        </Text>

        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
            
            justifyContent: 'space-between',
          }}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, alignContent: 'center' }}
            />
          )}
          <TouchableOpacity
            style={Styles.btStyle}
            onPress={() => navigation.navigate('Tensorflow')}>
            <Text style={{ fontSize: 20, textAlign: 'center' ,textAlignVertical:'center'}}>
              진단 결과 보기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.btnSpace}>
        <TouchableOpacity style={Styles.bStyle1} onPress={pickImage}>
          <Text style={Styles.btStyle1}>갤러리</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.bStyle2}>
          <Text
            style={Styles.btStyle2}
            onPress={() => navigation.navigate('Camera')}>
            카메라
          </Text>
        </TouchableOpacity>
      </View>
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
    height: '17%',
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
    width: '80%',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#8A47EB',
    height:'20%'
  },
  bStyle1: {
    width: '45%',
    height: '80%',
  },
  bStyle2: {
    width: '45%',
    height: '80%',
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
