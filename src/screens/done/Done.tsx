import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, Text } from 'react-native';
import Title from '../../components/title/title';
import { CustomFonts } from '../../shared/fonts';
import ButtonClick from '../../components/button/buttonClick';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Done() {
  const loaded = CustomFonts();
  if (!loaded)
    return null;
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
                  <ButtonClick text='Back to home'/> 
                </View> 
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
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

