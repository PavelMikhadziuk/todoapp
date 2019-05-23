import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default const Counter = props => {
  return (
    <View style={styles.container}>
      <View style={styles.alternativeLayoutButtonContainer}>
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
