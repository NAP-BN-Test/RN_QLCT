import React, {useState} from 'react';
import {Animated, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import ModalPoup from '../../../component/Modal/Modal';
import NotifyComfirm from '../../../component/Notify/NotifyComfirm';
import ItemOption from '../../../component/option/itemOption';
import {accountStore} from '../../../features';
import {postLogout} from '../../../features/account';
import {useAppSelector} from '../../../redux/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
function AllOption({navigation}: any) {
  const dispatch = useDispatch();
  const handlePostLogOut = () => dispatch(postLogout());
  const resultAccount = useAppSelector(accountStore);
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View>
          <View
            style={{
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 200,
                paddingHorizontal: 20,
              }}
              onPress={() => navigation.navigate('infouser')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  backgroundColor: '#fff',
                  height: '100%',
                  width: '95%',
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '80%',
                    height: '100%',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#891393cc',
                      height: 70,
                      width: 70,
                      borderRadius: 60,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <Text style={{fontSize: 30, color: '#fff'}}>
                      {resultAccount.listuser.username.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                  <Text style={{marginBottom: 5}}>
                    {resultAccount.listuser.username}
                  </Text>
                  <Text style={{marginBottom: 5}}>
                    {resultAccount.listuser.email}
                  </Text>
                </View>
                {/* <Text>T??i kho???n</Text> */}
              </View>

              <MaterialIcons
                name={'arrow-forward-ios'}
                size={13}
                color={'#000'}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              height: 1,
              opacity: 0.4,
              backgroundColor: '#000',
              marginBottom: 20,
            }}></View>
          <ItemOption iconRight="monetization-on" name="V?? c???a t??i" />
          <ItemOption name="C??ng c???" iconRight="construction" />
          <ItemOption name="C??i ?????t" iconRight="settings" />
          <ItemOption name="H??? tr???" iconRight="phone-in-talk" />
          <ItemOption name="Gi???i thi???u" iconRight="assignment-ind" />
        </View>

        <View style={{paddingHorizontal: 50}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setVisible(true);
              AsyncStorage.removeItem('token');
            }}
            style={{
              width: '100%',
              height: 35,
              backgroundColor: '#000',
              borderRadius: 20,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              marginHorizontal: 'auto',
            }}>
            <View>
              <Text style={{fontSize: 16, color: '#fff'}}>????ng xu???t</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ModalPoup visible={visible}>
        <NotifyComfirm
          content="B???n c?? mu???n ????ng xu???t kh??ng?"
          contentButtonLeft="Yes"
          contentButtonRight="No"
          onPressButtonLeft={() => {
            setVisible(false);
            AsyncStorage.setItem('token', resultAccount.token);
          }}
          onPressButtonRigth={() => {
            setVisible(false);
            handlePostLogOut();
          }}
        />
      </ModalPoup>
    </View>
  );
}

export default AllOption;
