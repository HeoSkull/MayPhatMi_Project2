import React, { useState} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';

import Title from '../../components/title/title';
import { CustomFonts } from '../../shared/fonts';
import CardInfo from './components/Card';
import ButtonClick from '../../components/button/buttonClick';
import NoodleCount from './components/NoodleCount';
import { useUser } from '../../hook/userProvider';
import { IconButton } from 'react-native-paper';


export default function Information() {
  const {user, handleLogOut, handleNoodleClick} = useUser();

  const loaded = CustomFonts();
  if (!loaded) return null;

  const [isImageLoading, setIsImageLoading] = useState(true); 
  
  const noodleImages = [
    [require('../../../assets/info1.png'), require('../../../assets/info2.png'), require('../../../assets/info3.png')],
    [require('../../../assets/info1.png'), require('../../../assets/info2.png'), require('../../../assets/unavaiableNoodle.png')],
    [require('../../../assets/info1.png'), require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png')],
    [require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png')]
  ];
  const currentNoodles = noodleImages[3 - (user.noodleCount)];

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
              <View style={styles.content}>

                  <View style={styles.header}>
                    <View style={styles.logoContainer}>
                      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
                    </View>
                    <IconButton icon="logout" size={30} iconColor='black' onPress={handleLogOut} />
                  </View>

                  <Title text='INFORMATION'/>

                  <CardInfo 
                    fullname= {user.name}
                    birthday={user.birthday}
                    gender={user.gender}
                    department={user.department}
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
                    <Text style={{color:'#D91313'}}>{user.noodleCount} </Text> cups of  noodles left this month
                  </Text>

                  <ButtonClick  
                    text={(user.noodleCount > 0) ? 'Get your noodles' : 'Come back next month'} 
                    onClick={handleNoodleClick} 
                  />
              </View>
            </>
          )}
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 30,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  logoContainer: {
    flex: 1, 
    alignItems: 'center', 
  },
  content: {  
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  logo: {
    left: 30,
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

