import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Counter from '../../component/counterSlice/Couter';
import Login from '../../screens/ScrennStart/login/login';
import Register from '../../screens/ScrennStart/register/register';
import Forgotpass from '../../screens/ScrennStart/forgotpassword/forgotpass';
import Error404 from '../../screens/Error404/Error404';
import TabHomeNavigation from '../TabNavigation/TabHomeNavigation';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Home from '../../screens/ScrennStart/Home/home';
import Hearder from '../../component/header/header';
import InfoUser from '../../screens/ScrennStart/user/infoUser/infoUser';
const AppStack = createStackNavigator();

const AppStackScreen = ({navigation}: any) => {
  return (
    <AppStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <AppStack.Screen
        options={{
          // headerTitle: (props: any) =><Hearder {...props}/>,
          headerShown: false,
        }}
        name="main"
        component={TabHomeNavigation}
      />
      <AppStack.Screen
        options={{
          title: 'Thông tin tải khoản',
          // headerShown: false,
        }}
        name="infouser"
        component={InfoUser}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
