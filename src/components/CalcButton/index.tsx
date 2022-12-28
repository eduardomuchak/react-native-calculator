import React from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native';

interface Props {
  label: string;
  onClick: Function;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
}

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
  operationButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export const CalcButton = ({
  label,
  onClick,
  double,
  triple,
  operation,
}: Props) => {
  const stylesButton = [styles.button];
  if (double) stylesButton.push(styles.buttonDouble);
  if (triple) stylesButton.push(styles.buttonTriple);
  if (operation) stylesButton.push(styles.operationButton);
  return (
    <TouchableHighlight onPress={() => onClick()}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
};
