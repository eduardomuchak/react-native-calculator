import React from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});

export const CalcButton = ({ label, onClick }: any) => {
  return (
    <TouchableHighlight onPress={onClick}>
      <Text style={styles.button}>{label}</Text>
    </TouchableHighlight>
  );
};
