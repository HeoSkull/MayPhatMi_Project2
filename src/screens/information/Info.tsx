import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Title from '../../components/title/title';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { CustomFonts } from '../../shared/fonts';
import CardInfo from './components/Card';
import ButtonClick from '../../components/button/buttonClick';
import NoodleCount from './components/NoodleCount';
type InformationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Information'>;
export default function Information() {
  const loaded = CustomFonts();
  if (!loaded) return null;
  const navigation = useNavigation<InformationScreenNavigationProp>();

  const [noodleCount, setNoodleCount] = useState(3); 

  const handleNoodleClick = () => {
    if (noodleCount > 0) {
      setNoodleCount(noodleCount - 1); 
      navigation.navigate('Done');
    } 
    if (noodleCount == 0) navigation.navigate('OutOfNoodles')
  };

  const noodleImages = [
    [require('../../../assets/info1.png'), require('../../../assets/info2.png'), require('../../../assets/info3.png')],
    [require('../../../assets/info1.png'), require('../../../assets/info2.png'), require('../../../assets/unavaiableNoodle.png')],
    [require('../../../assets/info1.png'), require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png')],
    [require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png')]
  ];
  const currentNoodles = noodleImages[3 - noodleCount];
  
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.bgImage}>
            <View style={styles.content}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo}/>

                <Title text='INFORMATION'/>

                <CardInfo 
                  fullname='Alice Mie'
                  birthday='12/10/1999'
                  gender='Female'
                  department='Design'
                />

                <View style={{flexDirection: 'row'}}>
                  {currentNoodles.map((img, index) => (
                    <NoodleCount 
                      key={index} 
                      img={img} 
                      text={img === require('../../../assets/unavaiableNoodle.png') ? 'Unvailable' : undefined}  />
                  ))}
                </View>

                <Text style={styles.text}>
                  <Text style={{color:'#D91313'}}>{noodleCount} </Text> cups of  noodles left this month
                </Text>
   
                <View style={{marginTop: 10}} />

                <ButtonClick  
                  text={noodleCount > 0 ? 'Get your noodles' : 'Come back next month'} 
                  onClick={handleNoodleClick} 
                />
            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
    marginHorizontal: 5
  },
  text: {
    color: '#9C6666',
    fontFamily: 'PaytoneOne',
    fontWeight: 600,
    fontSize: 13,
    textAlign: 'center',
    margin: 20
  }
});

