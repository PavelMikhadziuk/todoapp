import React, { Component } from 'react';
import { createStore } from 'redux';
import { AppRegistry, StyleSheet, Text, View, Button, Alert } from 'react-native';
import Counter from './components/Counter';
import { counter } from './reducers/reducers';
import { INCREMENT, DECREMENT } from './constants/actions';
// import FetchExample from './components/FetchExample';
// import SectionListBasics from './components/SectionListBasics';
// import FlatListBasics from './components/FlatListBasics';
// import IScrolledDownAndWhatHappenedNextShockedMe from './components/IScrolledDownAndWhatHappenedNextShockedMe';
// import Touchables from './components/Touchables';
// import PizzaTranslator from './components/PizzaTranslator';
// import UselessTextInput from './components/UselessTextInput';
// import UselessTextInputMultiline from './components/UselessTextInputMultiline';
// import ButtonBasics from './components/ButtonBasics';
// import TextInANest from './components/TextInANest';
// import BoldAndBeautiful from './components/BoldAndBeautiful';
// import BlockText from './components/BlockText';
// import FixedDimensionsBasics from './components/FixedDimensionsBasics';
// import FlexDimensionsBasics from './components/FlexDimensionsBasics';
// import FlexDirectionBasics from './components/FlexDirectionBasics';
// import JustifyContentBasics from './components/JustifyContentBasics';
// import AlignItemsBasics from './components/AlignItemsBasics';

// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });
const store = createStore(counter);
store.subscribe(Counter);

export default class App extends Component {

  onIncrement = () => {
    store.dispatch({ type: INCREMENT });
  };

  onDecrement = () => {
    store.dispatch({ type: DECREMENT });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Counter
          value={store.getState()}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
        {/*<FetchExample />*/}
        {/* <SectionListBasics /> */}
        {/*<FlatListBasics />*/}
        {/*<IScrolledDownAndWhatHappenedNextShockedMe />*/}
        {/*<Touchables />*/}
        {/*<PizzaTranslator />*/}
        {/*<UselessTextInput/>*/}
        {/*<UselessTextInputMultiline />*/}
        {/*<Button*/}
          {/*onPress={() => {*/}
            {/*Alert.alert('You tapped the button!');*/}
          {/*}}*/}
          {/*title="Press Me"*/}
        {/*/>*/}
        {/*<ButtonBasics />*/}
        {/*<AlignItemsBasics flexDirection="row" justifyContent="center" alignItems="flex-start"/>*/}
        {/*<AlignItemsBasics flexDirection="row" justifyContent="space-around" alignItems="flex-start"/>*/}
        {/*<AlignItemsBasics flexDirection="row" justifyContent="center" alignItems="flex-end"/>*/}
        {/*<AlignItemsBasics flexDirection="row" justifyContent="space-around" alignItems="flex-end"/>*/}
        {/*<AlignItemsBasics flexDirection="row" justifyContent="center" alignItems="center"/>*/}
        {/*<AlignItemsBasics flexDirection="row" justifyContent="space-around" alignItems="center"/>*/}
        {/*<AlignItemsBasics flexDirection="column" justifyContent="space-between" alignItems="center"/>*/}
        {/*<AlignItemsBasics flexDirection="column" justifyContent="flex-start" alignItems="flex-start"/>*/}
        {/*<AlignItemsBasics flexDirection="column" justifyContent="flex-end" alignItems="flex-end"/>*/}
        {/*<AlignItemsBasics flexDirection="column" justifyContent="center" alignItems="flex-start"/>*/}
        {/*<AlignItemsBasics flexDirection="column" justifyContent="space-around" alignItems="flex-end"/>*/}
        {/*<AlignItemsBasics flexDirection="column" justifyContent="space-evenly" alignItems="center"/>*/}
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
AppRegistry.registerComponent('AwesomeProject', () => App);
