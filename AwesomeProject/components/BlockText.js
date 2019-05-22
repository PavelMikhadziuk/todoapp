import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class BlockText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 8,
    }
  }


  increaseSize = () => {
    this.setState(prevState => ({ size: prevState.size + 1 }));
  };

  render() {
    /* otherwise, the text will flow as if it was one */
    return (
      <View>
        <Text>First part and </Text>
        <Text onLongPress={this.increaseSize} style={{ fontSize: this.state.size }}>second part</Text>
      </View>
    );
  }
}
