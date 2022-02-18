import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = React.useRef(null);
  const [imgUri, setImgUri] = useState();

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
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Camera  captureAudio={false} type={type} ref={cameraRef} ratio="5:4" >
          <Image
            style={{
              height: 160,
              width: 100,
            }}
            source={{ uri: imgUri }}
          />
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
       
        

<TouchableOpacity style={{ marginTop:20, alignSelf: 'center' }} onPress={getPicture}>
            <View style={{
              borderWidth: 2,
              borderRadius: 70 / 2,
              borderColor: 'white',
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
                borderColor: 'white',
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    width: 300,
    height: 400,
  },
  buttonContainer: {
    flex: 0.23,
    backgroundColor: 'F2F2F2',
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
    borderTopRightRadius:"5px",
    borderBottomLeftRadius:"5px",
    borderBottomRightRadius:"5px",
    borderBottomStartRadius:"5px",
    borderTopLeftRadius:"5px"
  },
  button1: {
    backgroundColor: "#8A47EB",
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: '50px',
    width: '100px',
    height: '100px',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
