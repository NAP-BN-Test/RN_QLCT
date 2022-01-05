/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Provider} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {store} from './src/redux/store';
import {authHeader} from './src/_helpers/auth-header';
import Counter from './src/component/counterSlice/Couter';
import Login from './src/screens/ScrennStart/login/login';
import RootStackScreen from './src/navigation/RootStack/RootStackScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      // ...DefaultTheme.colors,
      // primary: 'rgb(255, 45, 85)',
      // backgtound: '#ffff',
    },
  };
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <View style={{display: 'flex', flex: 1}}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
            <RootStackScreen />
          </NavigationContainer>
        </View>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
