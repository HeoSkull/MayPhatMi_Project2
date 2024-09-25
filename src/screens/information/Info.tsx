import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../../components/title/title';


export default function Information() {
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

