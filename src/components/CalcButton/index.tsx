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
  container: {},
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
    textAlign: 'center',
  },
  operationButton: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    borderRadius: 100,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    color: '#18c221',
  },
  buttonDouble: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    borderRadius: 100,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    borderRadius: 100,
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: (Dimensions.get('window').width / 4) * 3,
    _active: {
      backgroundColor: '#f0f0f0',
    },
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
    <TouchableHighlight style={styles.container} onPress={() => onClick()}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
};
