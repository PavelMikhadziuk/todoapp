import React from 'react';
import { TouchableNativeFeedback, StyleSheet, View, Text } from 'react-native';
import { connect  } from 'react-redux';
import { DECREMENT, INCREMENT, RESET } from '../constants/actions';

const Counter = props => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center'}}>
        <Text style={{ fontSize: 30 }}>Counter</Text>
        <Text style={{ fontSize: 60 }}>{props.count}</Text>
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableNativeFeedback onPress={props.onIncrement}>
          <View style={styles.buttonLayout}>
            <Text style={styles.buttonTextLayout}>+</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={props.onReset}>
          <View style={styles.buttonLayout}>
            <Text style={styles.buttonTextLayout}>R</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={props.onDecrement}>
          <View style={styles.buttonLayout}>
            <Text style={styles.buttonTextLayout}>-</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

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
  return {count: state.count};
};

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch({ type: INCREMENT });
  },

  onDecrement: () => {
    dispatch({ type: DECREMENT });
  },

  onReset: () => {
    dispatch({ type: RESET });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);