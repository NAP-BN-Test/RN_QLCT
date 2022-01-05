import React from 'react';
import {StyleSheet} from 'react-native';
import { accountStore } from '../../features';
import { useAppSelector } from '../../redux/hooks';
import AppStackScreen from '../AppStack/AppStackScreen';
import AuthStackScreen from '../Auth/AuthStackScreen';

function RootStackScreen() {
  const resultAccount = useAppSelector(accountStore);
  return resultAccount.token != '' ? (
    <AppStackScreen />
  ) : (
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
