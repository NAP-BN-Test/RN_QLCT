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
import EditUse from '../../screens/ScrennStart/user/editUser/EditUse';
import ChangePassword from '../../screens/ScrennStart/user/changePassword/changePassword';
import EditSpending from '../../screens/ScrennStart/spending/editSpending';
import CreateSpending from '../../screens/ScrennStart/spending/createSpending';
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

      <AppStack.Screen
        options={{
          title: 'Thay đổi thông tin tải khoản',
          // headerShown: false,
        }}
        name="edituser"
        component={EditUse}
      />

      <AppStack.Screen
        options={{
          title: 'Đổi mật khẩu',
          // headerShown: false,
        }}
        name="changepassword"
        component={ChangePassword}
      />

      <AppStack.Screen
        options={{
          title: 'Thêm mới',
          // headerShown: false,
        }}
        name="createspending"
        component={CreateSpending}
      />

      <AppStack.Screen
        options={{
          title: 'Sửa chi tiêu',
          // headerShown: false,
        }}
        name="editsending"
        component={EditSpending}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;
