import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { connect  } from 'react-redux';
import { DECREMENT, INCREMENT } from '../constants/actions';

const Counter = props => {
  return (
    <View style={styles.container}>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Text>Counter</Text>
        <Text>{props.count}</Text>
        <Button
          onPress={props.onIncrement}
          title="+"
        />
        <Button
          onPress={props.onDecrement}
          title="-"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);