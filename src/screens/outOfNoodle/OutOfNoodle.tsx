import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Title from '../../components/title/title';
import { CustomFonts } from '../../shared/fonts';
import { RootStackParamList } from '../../navigator/RootNavigator';
import usePanResponder from '../../shared/usePanResponder';
import { bg, logo, outOfNoodle } from '../../../img/img';

type OutOfNoodleScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OutOfNoodles'>;

export default function OutOfNoodles() {
  const navigation = useNavigation<OutOfNoodleScreenNavigationProp>();
  const [isImageLoading, setIsImageLoading] = useState(true); 

  const loaded = CustomFonts();
  if (!loaded)
    return null;

  const panResponder = usePanResponder(navigation, 'Information')
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
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

                  <Title text='OUT OF NOODLES'/>

                  <Text style={styles.text}>There is 
                    <Text style={{color:'white'}}> 0 </Text> 
                    cup of noodles left in the machine. Please fill in to continue.
                  </Text>

                  <Image source={outOfNoodle} style={styles.img}/>
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
    height: 195,
    marginRight: 10
  },
  text: {
    color: '#A09A9A',
    fontFamily: 'Nunito',
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

