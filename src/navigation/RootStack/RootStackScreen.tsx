import React from 'react';
import {StyleSheet} from 'react-native';
import AppStackScreen from '../AppStack/AppStackScreen';
import AuthStackScreen from '../Auth/AuthStackScreen';

function RootStackScreen() {
  const auth: any = {accesstoken: ''};
  return auth.accesstoken != '' ? (
    <AppStackScreen />
  ) : (
    //  <Text>ok</Text>
    // <AuthStackScreen />
    // <Text>No</Text>
    <AuthStackScreen />
  );
}

export default RootStackScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // width: '100%',
  },
});
