import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './src/home';
import UserScreen from './src/users';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Users: UserScreen,
},
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator);