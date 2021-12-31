import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Counter from '../../component/counterSlice/Couter';
import Login from '../../screens/ScrennStart/login/login';
import Register from '../../screens/ScrennStart/register/register';
import Forgotpass from '../../screens/ScrennStart/forgotpassword/forgotpass';
import Error404 from '../../screens/Error404/Error404';
import TabHomeNavigation from '../TabNavigation/TabHomeNavigation';
import {Header} from 'react-native/Libraries/NewAppScreen';
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
        options={{headerTitle: props => <Header {...props} />}}
        name="main"
        component={TabHomeNavigation}
      />
      <AppStack.Screen
        options={{
          // title: 'Đăng nhập',
          headerShown: false,
        }}
        name="home"
        component={Error404}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
