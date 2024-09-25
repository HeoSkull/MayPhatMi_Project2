import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, Text } from 'react-native';
import Title from '../../components/title/title';
import { ResizeMode, Video } from 'expo-av';
import { CustomFonts } from '../../shared/fonts';
import ScanGlide from '../../components/ScanImgGlide/ScanGlide';


export default function Welcome() {
  const loaded = CustomFonts();
  if (!loaded)
    return null;
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/bg.png')} style={styles.bgImage}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          <Image source={require('../../../assets/logo.png')} style={styles.logo}/>

          <Title text='WELCOME'/>

          <View style={[styles.outerBorder, styles.shadowBox]}>
            <View style={styles.innerBorder}>
              <Video 
                source={require('../../../assets/welcome_video.mp4')}
                rate={1.0}
                isMuted={false}
                shouldPlay={true} 
                isLooping={true} 
                resizeMode={ResizeMode.CONTAIN}
                style={styles.video}
              />
            </View>
          </View>
          
          <View style={styles.scanText}>
            <Image source={require('../../../assets/Scan.png')} style={styles.scan}/>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Follow the arrow to scan card</Text>
          </View>

          <View style={{marginTop: 50}}>
            <ScanGlide />
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 30,
    width: 100,
    height: 80
  },
  outerBorder: {
    width: 331,  
    height: 192, 
    borderColor: 'white', 
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 20
  },
  innerBorder: {
    width: 325,  
    height: 185.5, 
    borderColor: '#FFC900', 
    borderWidth: 3,
    borderRadius: 12,
  },
  shadowBox: {
    shadowColor: '#550A0A',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 6,
      width: -7
    }
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 12.5
  },
  scanText: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 60
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

