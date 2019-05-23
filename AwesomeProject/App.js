import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import Counter from './components/Counter';
import { counter } from './reducers/reducers';

const store = createStore(combineReducers({ counter }));

export default class App extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);
