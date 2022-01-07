import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { accountStore } from '../../features';
import { isLoadingGL } from '../../features/loadingGlobal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import FullInfo from '../../component/Profile/FullInfo';
import Error404 from '../../screens/Error404/Error404';
import AllOption from '../../screens/ScrennStart/AllOption/allOption';
import Home from '../../screens/ScrennStart/Home/home';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}: any) => (
  <TouchableOpacity
    style={{
      top: -30,
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    }}
    onPress={onPress}>
    <Animated.View style={{}}>{children}</Animated.View>
  </TouchableOpacity>
);



const TabHomeNavigation = () => {

  // const dispatch = useAppDispatch();
  // const resultAccount = useAppSelector(accountStore);

  // useEffect(() => {
  //   if (resultAccount.loading == false) {
  //     dispatch(isLoadingGL(false));
  //   } else {
  //     dispatch(isLoadingGL(true));
  //     console.log('Đang xử lý');
  //   }
  // }, []);
  function onPress() {
    console.log(1);
  }
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          // activeTintColor: '#000',
          // inactiveTintColor: '#aaa',
          height: 60,
          backgroundColor: 'white',
          shadowColor: '#7F5DF0',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color}: any) => {
          let iconName = 'ios-help';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;

            case 'Add':
              iconName = focused ? 'add-circle' : 'add-circle';
              break;

            case 'Plan':
              iconName = focused ? 'pending-actions' : 'pending-actions';

              break;

            case 'Report':
              iconName = focused
                ? 'align-vertical-bottom'
                : 'align-vertical-bottom';
              break;

            case 'Option':
              iconName = focused ? 'dehaze' : 'dehaze';
              break;
            default:
              break;
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Report"
        component={Error404}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Error404}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <CustomTabBarButton onPress={onPress} {...props}>
              <MaterialIcons name={'add-circle'} size={60} color={'#891393cc'} />
            </CustomTabBarButton>
          ),
        }}
      />

      <Tab.Screen
        name="Plan"
        component={Error404}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Option"
        component={AllOption}
        options={{
          // headerShown: false,
          title: 'Tài khoản'
        }}
      />

      
      {/* <Tab.Screen name="Search" component={Search} /> */}
    </Tab.Navigator>
  );
};

export default TabHomeNavigation;
