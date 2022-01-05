import React from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { postLogout } from '../../features/account';

const Error404 = () => {
  const dispatch = useDispatch()
  const handlePostLogOut = () =>
    dispatch(postLogout());
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>Error 404</Text>
      <TouchableOpacity
          onPress={() => handlePostLogOut()}
          >
          <Text >Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Error404;
