import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View, Text, Button } from 'react-native';

import HomeScreen from './src/home';
import UserScreen from './src/users';
import LogoTitle from './src/logo';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Home`,
      // headerTitle: LogoTitle,
      headerBackTitle: 'clown',
    })
  },
  Users: UserScreen,
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'green'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'

      },

    },
    // headerMode: 'none',
    // onTransitionStart: () => {
    //   // alert('start')
    // }
  }
)

export default createAppContainer(AppNavigator);