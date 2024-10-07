import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { updateDoc, doc, getDoc } from 'firebase/firestore';


import Title from '../../components/title/title';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { CustomFonts } from '../../shared/fonts';
import CardInfo from './components/Card';
import ButtonClick from '../../components/button/buttonClick';
import NoodleCount from './components/NoodleCount';
import {db,auth} from '../../db/db';
import { signOut } from 'firebase/auth';

type InformationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Information'>;

export default function Information() {
  const loaded = CustomFonts();
  if (!loaded) return null;
  const navigation = useNavigation<InformationScreenNavigationProp>();
  const [noodleCount, setNoodleCount] = useState<number | undefined>(undefined); 
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);;

  type UserDetail = {
    name?: string;
    birthday?: string;
    gender?: string;
    department?: string;
    noodleCount?: number;
  };
  const noodleImages = [
    [require('../../../assets/info1.png'), require('../../../assets/info2.png'), require('../../../assets/info3.png')],
    [require('../../../assets/info1.png'), require('../../../assets/info2.png'), require('../../../assets/unavaiableNoodle.png')],
    [require('../../../assets/info1.png'), require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png')],
    [require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png'), require('../../../assets/unavaiableNoodle.png')]
  ];
  const currentNoodles = noodleImages[3 - (noodleCount ?? 0)];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data() as UserDetail;
          setUserDetail(userData);
          setNoodleCount(userData.noodleCount); // Set noodleCount from userDetail
          console.log(userData); // Log user data only once
        } else {
          console.log('No document exists');
        }
      } else {
        console.log('No user is logged in');
      }
    });
  
    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);


  const handleNoodleClick = async () => {
    if (noodleCount && noodleCount > 0) {
      const newNoodleCount = noodleCount - 1; 
      setNoodleCount(newNoodleCount); 
  
      const user = auth.currentUser; 
      if (user) {
        const docRef = doc(db, 'users', user.uid); 
        await updateDoc(docRef, { noodleCount: newNoodleCount }); 
      }
  
      navigation.navigate('Done'); 
    } 
    if (noodleCount === 0) navigation.navigate('OutOfNoodles'); 
  };
  
  const handleLogOut = async() => {
    try { 
      await auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../../assets/bg.png')} style={styles.bgImage}>
            <View style={styles.content}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo}/>

                <Title text='INFORMATION'/>

                <CardInfo 
                  fullname= {userDetail?.name}
                  birthday={userDetail?.birthday}
                  gender={userDetail?.gender}
                  department={userDetail?.department}
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
                  text={(noodleCount && noodleCount > 0) ? 'Get your noodles' : 'Come back next month'} 
                  onClick={handleNoodleClick} 
                />
                <View style={{paddingTop: 10}}></View>
                <ButtonClick 
                  text='Log out'
                  onClick={handleLogOut}
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

