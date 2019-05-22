import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class BlockText extends Component {
  render () {
    /* otherwise, the text will flow as if it was one */
    return (
      <View>
        <Text>First part and </Text>
        <Text>second part</Text>
      </View>
    );
  }
}
