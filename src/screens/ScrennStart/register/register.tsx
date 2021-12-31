import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
const iconWhat = <Icon name="whatsapp" size={38} color="#961d1d" />;
const iconFB = (
  <IconEntypo name="facebook-with-circle" size={38} color="#23527c" />
);
const iconGG = (
  <IconEntypo name="google--with-circle" size={38} color="#961d1d" />
);
const iconPhone = <IconEntypo name="old-phone" size={38} color="#23527c" />;
const Register = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmpassword, setComfirmPassword] = useState('');
  const [numberphone, setNumberphone] = useState('');
  return (
    <View style={[styles.container, {padding: 20}]}>
      <View>
        {/* <Text style={styles.title}>Register</Text> */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setNumberphone(text)}
          value={numberphone}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType="number-pad"
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

        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Comfirm Password"
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          //   onPress={() => onLoginPress()}
        >
          <Text style={styles.buttonTitle}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    flexDirection: 'column',
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
  
});
