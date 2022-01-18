import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {accountStore} from '../../features';
import {isLoadingGL} from '../../features/loadingGlobal';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
// import FullInfo from '../../component/Profile/FullInfo';
import Error404 from '../../screens/Error404/Error404';
import AllOption from '../../screens/ScrennStart/AllOption/allOption';
import Home from '../../screens/ScrennStart/Home/home';
import colors from '../../assets/css/color';
import PageGrow from '../../screens/Error404/pageGrow';
import Target from '../../screens/ScrennStart/target/target';
import {token} from '../../commom/api';
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

const TabHomeNavigation = ({navigation}: any) => {
  const headerBackground = require('../../assets/img/topBarBg.png');
  // const dispatch = useAppDispatch();
  // const resultAccount = useAppSelector(accountStore);

  useEffect(() => {
    // if (resultAccount.loading == false) {
    //   dispatch(isLoadingGL(false));
    // } else {
    //   dispatch(isLoadingGL(true));
    //   console.log('Đang xử lý');
    // }
    async function name() {
      let value: string = (await AsyncStorage.getItem('token')) || '';
      console.log('111111111111', value);
    }
    name();
    console.log('token tab', token);
  }, []);
  function onPress() {
    console.log(1);
  }
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        headerBackground: () => (
          <Image style={styles.headerImage} source={headerBackground} />
        ),
        tabBarStyle: {
          // activeTintColor: '#000',
          // inactiveTintColor: '#aaa',
          height: 60,
          backgroundColor: colors.black,
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

            case 'Target':
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
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate('createspending');
              }}>
              <MaterialIcons
                name={'control-point'}
                size={28}
                color={colors.white}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          ),
          // headerLeft: null,
          headerTitleStyle: {
            color: colors.white,
            fontSize: 18,
          },
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="Report"
        component={PageGrow}
        options={{
          // headerShown: false,
          headerTitleStyle: {
            color: colors.white,
            fontSize: 18,
          },
          title: 'Report',
        }}
      />
      {/* <Tab.Screen
        name="Add"
        component={PageGrow}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <CustomTabBarButton onPress={onPress} {...props}>
              <MaterialIcons
                name={'add-circle'}
                size={60}
                color={'#891393cc'}
              />
            </CustomTabBarButton>
          ),
        }}
      /> */}

      <Tab.Screen
        name="Target"
        component={Target}
        options={{
          // headerShown: false,
          headerTitleStyle: {
            color: colors.white,
            fontSize: 18,
          },
          title: 'Target',
        }}
      />

      <Tab.Screen
        name="Option"
        component={AllOption}
        options={{
          // headerShown: false,
          title: 'Account',
          headerTitleStyle: {
            // fontFamily: fonts.primaryRegular,
            color: colors.white,
            fontSize: 18,
          },
        }}
      />

      {/* <Tab.Screen name="Search" component={Search} /> */}
    </Tab.Navigator>
  );
};

export default TabHomeNavigation;
const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100 + '%',
    height: 50,
  },
});
