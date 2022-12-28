import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

interface Props {
  value: number;
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  },
});

function CalcDisplay({ value }: Props) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

export default CalcDisplay;
