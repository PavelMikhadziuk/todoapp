import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
// import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleChangeText = (text) => {
    this.setState({text});
  };

  translateTextToPizzas = (text) => {
    return text.split(' ').map((word) => word && '🍕').join(' ');
  };

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={this.handleChangeText}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.translateTextToPizzas(this.state.text)}
        </Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);