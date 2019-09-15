import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapComponent from './src/components/MapComponent';


export default class HelloWorldApp extends Component {
  render() {
    debugger;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <MapComponent />
      </View>
    );
  }
}
