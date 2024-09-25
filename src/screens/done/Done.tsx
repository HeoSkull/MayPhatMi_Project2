import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, Text, PanResponder } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigator/RootNavigator';
import { CustomFonts } from '../../shared/fonts';
import ButtonClick from '../../components/button/buttonClick';
import Title from '../../components/title/title';
type DoneScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Done'>;

export default function Done() {
  const navigation = useNavigation<DoneScreenNavigationProp>();
  const loaded = CustomFonts();
  if (!loaded)
    return null;
  const recognizeDrag = ({ dy }: { dy: number }) => {
    if (dy > 50) return 1; // left to right
    return 0;
  };
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => { return true; },
    onPanResponderEnd: (e, gestureState) => {
      if (recognizeDrag(gestureState) === 1) {
        navigation.navigate('OutOfNoodles')
      }
      return true;
    }
  });
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.bgImage}>
            <View style={styles.content}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo}/>

                <Title text='DONE'/>

                <Image source={require('../../../assets/done.png')} style={styles.img}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.text1}>Enjoy your noodles </Text>
                  <Image source={require('../../../assets/like_done.png')} style={{height: 40, width: 40}}/>
                </View>

                <View style={{marginTop: 55}}>
                  <ButtonClick text='Back to home' onClick={()=> navigation.navigate('Welcome')}/> 
                </View> 
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 10}} {...panResponder.panHandlers}>
                  <Text style={[styles.text2]}>Get them below </Text>
                  <Image source={require('../../../assets/ArrowDownGesture.png')} style={{height: 40, width: 20}}/>
                </View>
            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {  
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 30,
    width: 100,
    height: 80
  },
  img: {
    width: 290,
    height: 335,
    marginRight: 10
  },
  text1: {
    color: '#C71A1A',
    fontFamily: 'PaytoneOne',
    fontWeight: 800,
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  text2: {
    color: '#F8C135',
    fontFamily: 'MPlus1',
    fontWeight: 800,
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  }
});

