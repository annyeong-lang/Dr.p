import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = React.useRef(null);
  const [imgUri, setImgUri] = useState(null);

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImgUri(result.uri);
    }
  };



  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const getPicture = async () => {
    if (cameraRef) {
      const result = await cameraRef.current.takePictureAsync();
      setImgUri(result.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if(imgUri===null)
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Camera  captureAudio={false} type={type} ref={cameraRef} ratio="5:4" >
        
        </Camera>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>
       
      
<TouchableOpacity style={{ marginTop:20, alignSelf: 'center' }} onPress= {getPicture}>
            <View style={{
              borderWidth: 2,
              borderRadius: 70 / 2,
              borderColor: 'lightgrey',
              height: 70,
              width: 70,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
              <View style={{
                borderWidth: 2,
                borderRadius: 60 / 2,
                borderColor: 'lightgrey',
                height: 60,
                width: 60,
                backgroundColor: 'white'
              }} >
              </View>
            </View>
          </TouchableOpacity>


      <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>  </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

 return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.logo}>
          진단받을 피부 부위
          {'\n'}사진을 첨부해주세요
        </Text>
        <Text style={styles.logo2}>
          밝은 곳에서 피부가 잘 보이도록{'\n'}
          사진을 촬영해주세요
        </Text>
        <View style={{alignItems:'center', marginTop:20}}>
       <Image
            style={{
              height: 200,
              width: 200,
            }}
            source={{ uri: imgUri }}
          />
          <TouchableOpacity
            style={styles.btStyle}
            onPress={() => navigation.navigate('Result')}>
            
            <Text style={{ fontSize: 20, textAlign: 'center' ,textAlignVertical:'center'}}>
              진단 결과 보기
            </Text>
          </TouchableOpacity></View>
      </View>
      <View style={styles.btnSpace}>
        <TouchableOpacity style={styles.bStyle1} onPress={pickImage}>
          <Text style={styles.btStyle1}>갤러리</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bStyle2}>
          <Text
            style={styles.btStyle2}
            onPress={() => navigation.navigate('Camera')}>
            카메라
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  camera: {
    width: 300,
    height: 400,
  },
  buttonContainer: {
    flex: 0.23,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
  },
  button: {
        marginBottom:83,

    backgroundColor: "#8A47EB",
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
  },
   btStyle: {
    alignItems:'center',
    width: '80%',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius:5,
    borderTopLeftRadius: 5,
    backgroundColor: '#8A47EB',
    height:'20%'
  },
  button1: {
    backgroundColor: "#8A47EB",
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 18,
    color: 'white',
  }, logo: {
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

  bStyle1: {
    width: 45,
    height: 100,
  },
  bStyle2: {
    width: 45,
    height: 100,
  },
  btStyle1: {
    fontSize: 30,
    fontWeight: 500,
    color: 'black',
    backgroundColor: '#F2F2F2',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
  },
  btStyle2: {
    fontWeight: 500,
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
