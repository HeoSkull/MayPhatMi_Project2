import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, Text } from 'react-native';
import Title from '../../components/title/title';
import { CustomFonts } from '../../shared/fonts';


export default function OutOfNoodles() {
  const loaded = CustomFonts();
  if (!loaded)
    return null;
  return (
    <View style={styles.container}>
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

