import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import RootNavigator from './src/navigator/RootNavigator';
import { store } from './src/redux/store';
import { PaperProvider } from 'react-native-paper';
import { UserProvider } from './src/hook/userProvider';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <UserProvider>
            <RootNavigator />
          </UserProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>

  );
}


