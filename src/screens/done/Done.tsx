import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, PanResponder, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigator/RootNavigator';
import { CustomFonts } from '../../shared/fonts';
import ButtonClick from '../../components/button/buttonClick';
import Title from '../../components/title/title';
import { arrowDownGesture, bg, done, like_done, logo } from '../../../img/img';
type DoneScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Done'>;

export default function Done() {
  const navigation = useNavigation<DoneScreenNavigationProp>();
  const [isImageLoading, setIsImageLoading] = useState(true); 

  const loaded = CustomFonts();
  if (!loaded) return null;

  const recognizeDrag = ({ dy }: { dy: number }) => {
    if (dy > 50) return 1; // left to right
    return 0;
  };
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => { return true; },
    onPanResponderEnd: (e, gestureState) => {
      if (recognizeDrag(gestureState) === 1) {
        navigation.navigate('Information')
      }
      return true;
    }
  });
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={bg} 
        style={styles.bgImage}
        onLoadStart={() => setIsImageLoading(true)} 
        onLoadEnd={() => setIsImageLoading(false)} 
      >
        {isImageLoading ? ( 
            <View style={styles.fullScreenIndicator}>
              <ActivityIndicator size="large" color="black" />
            </View>
          ) : (
            <>
              <View style={styles.content}>
                  <Image source={logo} style={styles.logo}/>

                  <Title text='DONE'/>

                  <Image source={done} style={styles.img}/>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.text}>Enjoy your noodles </Text>
                    <Image source={like_done} style={{height: 40, width: 40}}/>
                  </View>

                  <ButtonClick text='Back to home' onClick={()=> navigation.navigate('Information')}/> 

                  <View style={{flexDirection: 'column', alignItems: 'center'}} {...panResponder.panHandlers}>
                    <Text style={[styles.textUnderButton]}>Get them below </Text>
                    <Image source={arrowDownGesture} style={{height: 40, width: 20}}/>
                  </View>
              </View>
            </>
          )}
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
  text: {
    color: '#C71A1A',
    fontFamily: 'PaytoneOne',
    fontWeight: 800,
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  textUnderButton: {
    color: '#F8C135',
    fontFamily: 'MPlus1',
    fontWeight: 800,
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  fullScreenIndicator: {
    position: 'absolute', 
    top: 0,
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

