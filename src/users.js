import React, { Component } from 'react';


import { StyleSheet, View, Text, Button } from 'react-native';

class UserScreen extends Component {

  static navigationOptions = {
    title: 'User',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: 'blue',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'green',
    },
  }

  render() {

    const userId = this.props.navigation.getParam('userId', 'N/A');
    const userName = this.props.navigation.getParam('userName');
    const userLastName = this.props.navigation.getParam('userLastName');


    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
      >
        <Text> I am the Users Screen  </Text>
        <Text>User ID: {userId} </Text>
        <Text>User Name: {userName} </Text>
        <Text>User LastName: {userLastName} </Text>

        <Button
          title="Go to Home"
          onPress={
            () => this.props.navigation.navigate("Home", {
              message: "Hello Guys"
            })

          }
        />

        <Button
          title="Go to Back"
          onPress={
            () => this.props.navigation.goBack()
          }
        />
      </View>
    )
  }
}



export default UserScreen;