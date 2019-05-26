import React, { Component } from 'react';
import { TouchableNativeFeedback, StyleSheet, View, Text, TextInput } from 'react-native';
import { connect  } from 'react-redux';
import { DECREMENT, INCREMENT, RESET } from '../constants/actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    }
  }

  handleOnIncrement = () => {
    console.log('this.state.amount ', this.state.amount);
    this.props.onIncrement(this.state.amount);
  };

  handleOnDecrement = () => {
    this.props.onDecrement(this.state.amount);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>Counter</Text>
          <Text style={{fontSize: 60}}>{this.props.count}</Text>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <TouchableNativeFeedback onPress={this.handleOnIncrement}>
            <View style={styles.buttonLayout}>
              <Text style={styles.buttonTextLayout}>+</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.props.onReset}>
            <View style={styles.buttonLayout}>
              <Text style={styles.buttonTextLayout}>R</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.handleOnDecrement}>
            <View style={styles.buttonLayout}>
              <Text style={styles.buttonTextLayout}>-</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <TextInput
          style={{height: 40, borderWidth: 1}}
          onChangeText={text => { this.setState({ amount: parseInt(text || 1)})}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'green',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonLayout: {
    padding: 30,
    backgroundColor: 'lightgreen',
    borderRadius: 20
  },
  buttonTextLayout: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => {
  console.log('state = ', state);
  console.log('state.count = ', state.count);
  return { count: state.count };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: amount => {
    dispatch({ type: INCREMENT, amount });
  },

  onDecrement: amount => {
    dispatch({ type: DECREMENT, amount });
  },

  onReset: () => {
    dispatch({ type: RESET });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);