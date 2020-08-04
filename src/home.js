import React, { Component } from 'react';


import { StyleSheet, View, Text, Button } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
      >
        <Text> Home Screen </Text>
        <Button
          title="Go to Users"
          onPress={
            () => this.props.navigation.navigate('Users', {
              userId: 12,
              userName: 'Francis',
              userLastName: 'Jones',
            })
          }
        />
        <Text>{this.props.navigation.getParam('message', 'N/A')}</Text>
      </View>
    )
  }
}



export default HomeScreen;