import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import '~/config/ReactotronConfig';
import './config/DevToolsConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}
