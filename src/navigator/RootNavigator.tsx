import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome/Welcome';
import Information from '../screens/information/Info';
import Error from '../screens/error/Error';
import OutOfNoodles from '../screens/outOfNoodle/OutOfNoodle';
import Done from '../screens/done/Done';
export type RootStackParamList = {
  'Welcome': undefined;
  'Information': undefined;
  'Error': undefined;
  'OutOfNoodles': undefined;
  'Done': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Error" component={Error} />
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="Done" component={Done} />
      <Stack.Screen name="OutOfNoodles" component={OutOfNoodles} />
    </Stack.Navigator>
  );
}