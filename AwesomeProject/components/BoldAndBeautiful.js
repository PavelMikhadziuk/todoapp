import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class BoldAndBeautiful extends Component {
  render() {
    return (
    // the text will be inline if the space allowed it
      <Text style={{fontWeight: 'bold'}}>
        I am bold
        <Text style={{color: 'red'}}>
          and red
        </Text>
        <Text>
          <Text>First part and </Text>
          <Text>second part</Text>
        </Text>
      </Text>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BoldAndBeautiful);