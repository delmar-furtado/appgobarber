import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  const [loaded] = useFonts({
    'RobotoSlab-Medium': require('../assets/fonts/RobotoSlab-Medium.ttf'),
    'RobotoSlab-Regular': require('../assets/fonts/RobotoSlab-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
