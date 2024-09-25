import React from 'react';
import { StyleSheet, View, Image, ImageBackground, ScrollView, Text, TouchableOpacity, PanResponder } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Title from '../../components/title/title';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { CustomFonts } from '../../shared/fonts';
import ScanGlide from '../../components/ScanImgGlide/ScanGlide';

type ErrorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Error'>;

export default function Error() {
  const navigation = useNavigation<ErrorScreenNavigationProp>();
  const loaded = CustomFonts();
  if (!loaded)
    return null;
  const recognizeDrag = ({ dx }: { dx: number }) => {
    if (dx > 200) return 1; // left to right
    return 0;
  };
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => { return true; },
    onPanResponderEnd: (e, gestureState) => {
      if (recognizeDrag(gestureState) === 1) {
        navigation.navigate('Done')
      }
      return true;
    }
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/bg.png')} style={styles.bgImage}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo}/>

        <Title text='ERROR'/>
        
        <Text style={ styles.text}>Can not recongnize your ID card. </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, {color: '#FFFFFF', fontSize: 18}]}>Please scan again.</Text>
        </TouchableOpacity>

        <Image source={require('../../../assets/error.png')} style={styles.img}/>

        <View style={styles.scanText}>
          <Image source={require('../../../assets/Scan.png')} style={styles.scan}/>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Follow the arrow to scan card</Text>
        </View>

        <View style={{marginTop: 40}} {...panResponder.panHandlers}>
          <ScanGlide />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    marginTop: 30,
    width: 100,
    height: 80
  },
  button: {
    backgroundColor: '#D86643',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  img: {
    width: 130,
    height: 150,
    marginVertical: 30
  },
  scanText: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  scan: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  text: {
    color: '#AE0808',
    fontFamily: 'Nunito',
    fontWeight: 800,
    fontSize: 20,
    lineHeight: 65.47
  }
});

