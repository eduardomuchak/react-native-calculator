import React from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Text } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

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
    borderRadius: 100,
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
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
    fontFamily: 'Poppins_500Medium',
  },
  buttonDouble: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    borderRadius: 100,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: (Dimensions.get('window').width / 4) * 2,
    fontFamily: 'Poppins_500Medium',
  },
  buttonTriple: {
    borderRadius: 100,
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: (Dimensions.get('window').width / 4) * 3,
    fontFamily: 'Poppins_500Medium',
  },
});

export const CalcButton = ({
  label,
  onClick,
  double,
  triple,
  operation,
}: Props) => {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

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
