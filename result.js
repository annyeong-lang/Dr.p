import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm

import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Main({ navigation }) {
  const [type, setType] = useState('면포성 여드름');
  const [detail, setDetail] = useState(
    '여드름의 초기 단계인 면포성 여드름입니다. \n좁쌀 여드름이라고도 하는  이 면포성 여드름은 \n 아직 여드름 초기 단계입니다. '
  );

  return (
    <View style={Styles.container}>
      <StatusBar style="auto" />
      <View style={Styles.top}>
        <Text style={Styles.name}>진단결과</Text>
      </View>
      <View style={Styles.main1}></View>
      
      <View style={Styles.main2}>
        <View style={Styles.num}>
          <MaterialCommunityIcons
            name="numeric-1-circle"
            size={24}
            color="purple"
          />
          <MaterialCommunityIcons
            name="numeric-2-circle-outline"
            size={24}
            color="black"
          />
          <MaterialCommunityIcons
            name="numeric-3-circle-outline"
            size={24}
            color="black"
          />
          <MaterialCommunityIcons
            name="numeric-4-circle-outline"
            size={24}
            color="black"
          />
        </View>
        <View style={Styles.submain}>
          <Text style={Styles.typeName}>{type}</Text>
        </View>

        <Text style={Styles.detailStyle}>{detail}</Text>
      </View>
      <View Style={Styles.midbt}>
        <TouchableOpacity style={Styles.btnStyle}>
          <Text style={Styles.btntxtStyle} onPress={() => navigation.navigate('Carelist')}> 추천 약과 관리 방법</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.bottom}>
        <View style={Styles.num}>
        <TouchableOpacity onPress={() => navigation.navigate("start")}>
        <Entypo
            name="clipboard"
            size={40}
            color="black"
            
          />
          <Text style={{fontWeight:"bold"}}>진단</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            signOut(authService);
            navigation.navigate("Login");
          }}
        >
          <Foundation name="results" size={42} color="black" />
          <Text style={{fontWeight:"bold"}}>결과</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("drugStoreScreen")}>
        <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={47}
            color="black"
          />
          <Text style={{fontWeight:"bold"}}>지도</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="setting" size={40} color="black" />
          <Text style={{fontWeight:"bold"}}>설정</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
  },
  top: {
    flex: 0.5,
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
  },
  main1: {
    flex: 0.3,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  typeName: {
    marginTop: 25,
    width: 300,
    height: 50,
    fontWeight: '300',
    textAlign: 'center',
    fontSize: 22,
  },
  main2: {
    flex: 0.7,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  detailStyle: {
    fontSize: 15,
    marginTop: 70,
  },
  submain: {
    flex: 0.5,
    backgroundColor: '#F4F4F3',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  midbt: {
    flex: 2,
    backgroundColor: 'purple',
  },
  num: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  bottom: {
    flexDirection: 'row',
    flex: 0.4,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  btnStyle: {
    width: 290,
    height: 50,
    textAlign: 'center',
    backgroundColor: '#8A47EB',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomStartRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'center',
  },
  btntxtStyle: {
    color: 'white',
    fontSize: 17,
    margin: 10,
    textAlign: 'center',
    marginTop: 15,
  },
});
