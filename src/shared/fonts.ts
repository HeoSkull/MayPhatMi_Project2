import { useFonts } from 'expo-font';

export const CustomFonts = () => {
  const [loaded] = useFonts({
    svnNexa: require('../../assets/fonts/SVN-Nexa Rust Slab Black Shadow.ttf'),
    Nunito: require('../../assets/fonts/Nunito.ttf'),
    NunitoBold: require('../../assets/fonts/Nunito-Bold.ttf'),
    PaytoneOne: require('../../assets/fonts/Paytone One.ttf'),
    MPlus1: require('../../assets/fonts/M PLUS 1.ttf')
  });
  return loaded;
};