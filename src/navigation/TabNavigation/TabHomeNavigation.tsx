import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FullInfo from '../../component/Profile/FullInfo';
import Error404 from '../../screens/Error404/Error404';
const Tab = createBottomTabNavigator();

const TabHomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color}: any) => {
          let iconName = 'ios-help';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;

            case 'Abc':
              iconName = focused ? 'facebook' : 'facebook';
              break;
            default:
              break;
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },

        // tabBarStyle : {
        //   activeTintColor: '#000',
        //   inactiveTintColor: '#aaa',
        //   style: {
        //     height: 50,
        //     backgroundColor: 'white',
        //   },
        // },
      })}>
      <Tab.Screen
        name="Home"
        component={Error404}
        options={{
          headerShown: false,
        }}
      />

      {/* <Tab.Screen
        name="Abc"
        component={FullInfo}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Tab.Screen name="Search" component={Search} /> */}
    </Tab.Navigator>
    // </View>
  );
};

export default TabHomeNavigation;
