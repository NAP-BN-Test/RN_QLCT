import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useAppDispatch} from '../../../redux/hooks';
import {postCreateSpending} from '../../../features/spending';
const CreateSpending = ({navigation}: any) => {
  const [namect, setnamect] = useState('');
  const [moneyct, setMoneyct] = useState('');
  const dispatch = useAppDispatch();
  function handleSubmit() {
    dispatch(
      postCreateSpending([
        {
          timect: new Date(),
          namect: namect,
          moneyct: Number(moneyct),
        },
      ]),
    );
  }

  return (
    <View style={[styles.container, {padding: 20}]}>
      <View>
        {/* <Text style={styles.title}>Forgot Pass</Text> */}

        <TextInput
          style={styles.input}
          placeholder="Tên chi tiêu"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setnamect(text)}
          value={namect}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Số tiền"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setMoneyct(text)}
          value={moneyct}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType="number-pad"
        />

        {/* <TextInput
          style={styles.input}
          placeholder="Tên chi tiêu"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setTimect(text)}
          value={timect}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        /> */}

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.buttonTitle}>Thêm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateSpending;

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
