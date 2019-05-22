import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import TextInANest from './components/TextInANest';
import BoldAndBeautiful from './components/BoldAndBeautiful';
import BlockText from './components/BlockText';
// import FixedDimensionsBasics from './components/FixedDimensionsBasics';
// import FlexDimensionsBasics from './components/FlexDimensionsBasics';
// import FlexDirectionBasics from './components/FlexDirectionBasics';
import JustifyContentBasics from './components/JustifyContentBasics';
import AlignItemsBasics from './components/AlignItemsBasics';

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
        <AlignItemsBasics />
        {/*<JustifyContentBasics flexDirection="column"/>*/}
        {/*<JustifyContentBasics flexDirection="row"/>*/}
        {/*<JustifyContentBasics flexDirection="row" justifyContent="flex-start"/>*/}
        {/*<JustifyContentBasics flexDirection="row" justifyContent="center"/>*/}
        {/*<JustifyContentBasics flexDirection="row" justifyContent="flex-end"/>*/}
        {/*<JustifyContentBasics flexDirection="row" justifyContent="space-around"/>*/}
        {/*<JustifyContentBasics flexDirection="row" justifyContent="space-between"/>*/}
        {/*<JustifyContentBasics flexDirection="row" justifyContent="space-evenly"/>*/}
        {/*<Text style={styles.red}>Just divider text, bro.</Text>*/}
        {/*<TextInANest />*/}
        {/*<BoldAndBeautiful />*/}
        {/*<BlockText />*/}
        {/*<FlexDirectionBasics />*/}
        {/*<FixedDimensionsBasics />*/}
        {/*<FlexDimensionsBasics />*/}
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
