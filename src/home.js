import React, { Component } from 'react';


import { StyleSheet, View, Text, Button } from 'react-native';

class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button

          title="B"
          onPress={() => navigation.navigate('Users')}
        />
      ),
      headerRight: (
        <Button

          title="R"
          onPress={() => navigation.navigate('Users')}
        />
      )

    }
  }

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
          title="Go to Side Drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <Button
          title="Go to Users"
          onPress={
            () => this.props.navigation.navigate('Users', {
              userId: 12,
              userName: 'Saruj',
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