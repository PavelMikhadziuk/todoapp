import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import TextInANest from './components/TextInANest';
import BoldAndBeautiful from './components/BoldAndBeautiful';
import BlockText from './components/BlockText';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import FlexDimensionsBasics from './components/FlexDimensionsBasics';
import FlexDirectionBasics from './components/FlexDirectionBasics';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlexDirectionBasics />
        <Text style={styles.red}>just red</Text>
        <TextInANest />
        <BoldAndBeautiful />
        <BlockText />
        <FixedDimensionsBasics />
        <FlexDimensionsBasics />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
