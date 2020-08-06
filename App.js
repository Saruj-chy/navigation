import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Image } from 'react-native';

import HomeScreen from './src/home';
import UserScreen from './src/users';
import LogoTitle from './src/logo';

import Icon from './src/images/animal-track.png'



const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        return <Image
          source={Icon}
          style={{ width: 30, height: 30 }}
        />
      },
    })
  },
  Users: UserScreen,

}, {
  initialRouteName: 'Users',
  order: ['Users', 'Home'],  //kon tab aghe hobe, seta tikh kore
  tabBarOptions: {
    // activeBackgroundColor: 'green',
    // activeTintColor: 'red',
    // inactiveBackgroundColor: 'grey',
    // inactiveTintColor: 'yellow',
    showLabel: true,
    style: {
      backgroundColor: 'green',
    },
    labelStyle: {
      fontSize: 20,
    }

  },
  defaultNavigationOptions: ({ navigation }) => ({
    // tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //   const { routeName } = navigation.state;
    //   // if (routeName === 'Users') {
    //   //   console.warn('Users Icon');
    //   // } else {
    //   //   console.warn('Home Icon');
    //   // }

    //   return <Image
    //     source={Icon}
    //     style={{ width: 30, height: 30 }}
    //   />
    // },
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      // alert(navigation)
      if (navigation.state.key === 'Users') {
        navigation.navigate('Users')
      } else {
        defaultHandler();
      }
    }
  })
})







//==============   this code is for drawer navigation
// const AppNavigator = createDrawerNavigator({
//   Home: HomeScreen,
//   Users: UserScreen
// }, {
//   drawerWidth: 100,
//   drawerPosition: 'right',
//   drawerBackgroundColor: 'green',
//   drawerType: 'front',
//   contentOptions: {
//     activeBackgroundColor: 'blue',
//     activeTintColor: 'red'
//   }
// }
// )







// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: `Home`,
//       // headerTitle: LogoTitle,
//       headerBackTitle: 'clown',
//     })
//   },
//   Users: UserScreen,
// },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: 'green'
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//         flex: 1,
//         textAlign: 'center'

//       },

//     },
//     // headerMode: 'none',
//     // onTransitionStart: () => {
//     //   // alert('start')
//     // }
//   }
// )

export default createAppContainer(AppNavigator);