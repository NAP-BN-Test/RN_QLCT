import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useAppDispatch} from '../../../redux/hooks';
import {LoginType} from '../../../types';
import {postLogin} from '../../../features/account';
// import {useNavigation} from '@react-navigation/native';
const iconWhat = <Icon name="whatsapp" size={38} color="#961d1d" />;
const iconFB = (
  <IconEntypo name="facebook-with-circle" size={38} color="#23527c" />
);
const iconGG = (
  <IconEntypo name="google--with-circle" size={38} color="#961d1d" />
);
const iconPhone = <IconEntypo name="old-phone" size={38} color="#23527c" />;
const Login = ({navigation}: any) => {
  //   const navigate = useNavigation();
  const dispatch = useAppDispatch();
  // dispatch api
  const handlePostLogin = (data: LoginType) => dispatch(postLogin(data));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={[styles.container, {padding: 20}]}>
      <View>
        <Text style={styles.title}>Signin</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setUsername(text)}
          value={username}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handlePostLogin({
              username: username,
              password: password,
            })
          }>
          <Text style={styles.buttonTitle}>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('forgotpassword')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontWeight: '400',
              fontSize: 14,
              marginTop: 20,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Text style={[styles.textDemo, {marginTop: 20}]}>or</Text>
        <View
          style={[
            {
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            },
          ]}>
          <TouchableOpacity
          //   onPress={() => onLoginPress()}
          >
            <View>{iconFB}</View>
          </TouchableOpacity>
          <TouchableOpacity
          //   onPress={() => onLoginPress()}
          >
            <View>{iconGG}</View>
          </TouchableOpacity>
          <TouchableOpacity
          //   onPress={() => onLoginPress()}
          >
            <View>{iconPhone}</View>
          </TouchableOpacity>
          <TouchableOpacity
          //   onPress={() => onLoginPress()}
          >
            <View>{iconWhat}</View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          //   alignItems: 'center',
        }}>
        <Text style={styles.textDemo}>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.buttonFooter}
          onPress={() => navigation.navigate('register')}>
          <Text style={styles.buttonTitleFooter}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    //   alignItems: 'center',
    flexDirection: 'column',
    // flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#ffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#000',
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonFooter: {
    backgroundColor: '#ffff',
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTitleFooter: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textDemo: {
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
    opacity: 0.5,
    textAlign: 'center',
  },
  //   footerView: {
  //     flex: 1,
  //     alignItems: 'center',
  //     marginTop: 20,
  //   },
  //   footerText: {
  //     fontSize: 16,
  //     color: '#2e2e2d',
  //   },
  //   footerLink: {
  //     color: '#788eec',
  //     fontWeight: 'bold',
  //     fontSize: 16,
  //   },
});
