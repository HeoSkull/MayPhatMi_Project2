import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../../components/title/title';


export default function Error() {
  return (
    <View style={styles.container}>
        <Title text={'ERROR'}/>
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

