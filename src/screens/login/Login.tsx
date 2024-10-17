import React, {useState} from 'react';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigator/RootNavigator';
import { CustomFonts } from '../../shared/fonts';
import ButtonClick from '../../components/button/buttonClick';
import Title from '../../components/title/title';
import { TextInput } from 'react-native-paper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/db';
import { bg, logo } from '../../../img/img';
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const loaded = CustomFonts();
  if (!loaded) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(true); 

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  const handleLogin = async() => {
    try {
      await signInWithEmailAndPassword(auth,email,password)
      console.log("User login thành công");
      navigation.navigate('Information');
    } catch (error) {
      console.log(error);
      alert('wrong email/password')
    }
  }
  return (
    <View style={styles.container}>
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

                  <Title text='LOGIN'/>
                  <TextInput 
                    style={styles.textInput}
                    placeholder='Email'
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                    underlineColor="transparent"
                    left={<TextInput.Icon icon={'account'}/>}
                  />
                  <View style={{margin: 20}}></View>
                  <TextInput 
                    style={styles.textInput}
                    placeholder='Password'
                    value={password}
                    onChangeText={(text)=> setPassword(text)}
                    underlineColor="transparent"
                    secureTextEntry={isSecure}
                    left={<TextInput.Icon icon={'key'}/>}
                    right={<TextInput.Icon icon={isSecure? "eye": "eye-outline"} onPress={toggleSecureEntry}/>}
                  />

                  <View style={{marginTop: 55}}>
                    <ButtonClick text='Login' onClick={handleLogin}/> 
                  </View> 
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
  },
  textInput: {
    width: '80%',
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

