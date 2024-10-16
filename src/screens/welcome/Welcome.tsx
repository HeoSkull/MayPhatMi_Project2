import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigator/RootNavigator';
import { CustomFonts } from '../../shared/fonts';
import Title from '../../components/title/title';
import ScanGlide from '../../components/ScanImgGlide/ScanGlide';
import usePanResponder from '../../shared/usePanResponder';
type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function Welcome() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(true); 

  const loaded = CustomFonts();
  if (!loaded) return null;

  const panResponder = usePanResponder(navigation, 'Error')
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../assets/bg.png')} 
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
              <Image source={require('../../../assets/logo.png')} style={styles.logo} />
              <Title text='WELCOME' />
              
              <View style={[styles.outerBorder, styles.shadowBox]}>
                <View style={styles.innerBorder}>
                  {isLoading && (              
                    <View style={styles.loadingIndicator}>
                      <ActivityIndicator size="large" color="black" />
                    </View>
                  )} 
                  <Video 
                    source={require('../../../assets/welcome_video.mp4')}
                    rate={1.0}
                    isMuted={false}
                    shouldPlay={true} 
                    isLooping={true} 
                    resizeMode={ResizeMode.CONTAIN}
                    style={styles.video}
                    onLoad={() => setIsLoading(false)}
                  />
                </View>
              </View>
              
              <View style={styles.scanText}>
                <Image source={require('../../../assets/Scan.png')} style={styles.scan} />
                <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">Follow the arrow to scan card</Text>
              </View>

              <View style={{ marginTop: 50 }} {...panResponder.panHandlers}>
                <ScanGlide />
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
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
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
  fullScreenIndicator: {
    position: 'absolute', 
    top: 0,
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  loadingIndicator: {
    position: 'absolute', 
    top: '50%',
    left: '50%', 
    transform: [{ translateX: -20 }, { translateY: -15 }], 
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

