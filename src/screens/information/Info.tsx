import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Title from '../../components/title/title';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type InformationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Information'>;
export default function Information() {
  const navigation = useNavigation<InformationScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Title text='INFORMATION'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

