import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, PanResponder } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Title from '../../components/title/title';
import { CustomFonts } from '../../shared/fonts';
import { RootStackParamList } from '../../navigator/RootNavigator';

type OutOfNoodleScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OutOfNoodles'>;

export default function OutOfNoodles() {
  const navigation = useNavigation<OutOfNoodleScreenNavigationProp>();
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
        navigation.navigate('Welcome')
      }
      return true;
    }
  });
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.bgImage}>
            <View style={styles.content}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo}/>

                <Title text='OUT OF NOODLES'/>

                <Text style={styles.text}>There is 
                  <Text style={{color:'white'}}>0</Text> 
                  cup of noodles left in the machine. Please fill in to continue.
                </Text>

                <Image source={require('../../../assets/outOfNoodle.png')} style={styles.img}/>
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
  }
});

