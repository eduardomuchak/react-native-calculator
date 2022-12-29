import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';

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
    height: Dimensions.get('window').width / 4 - 14,
    width: Dimensions.get('window').width / 4 - 14,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    textAlignVertical: 'center',
  },
  operationButton: {
    fontSize: 35,
    height: Dimensions.get('window').width / 4 - 14,
    width: Dimensions.get('window').width / 4 - 14,
    borderRadius: 100,
    padding: 20,
    backgroundColor: '#f0f0f0',
    color: '#18c221',
    fontFamily: 'Poppins_500Medium',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  buttonDouble: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4 - 14,
    borderRadius: 100,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: (Dimensions.get('window').width / 4) * 2 - 14,
    fontFamily: 'Poppins_500Medium',
    textAlignVertical: 'center',
  },
  buttonTriple: {
    borderRadius: 100,
    fontSize: 40,
    height: Dimensions.get('window').width / 4 - 14,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: (Dimensions.get('window').width / 4) * 3 - 14,
    fontFamily: 'Poppins_500Medium',
    textAlignVertical: 'center',
  },
  buttonContainer: {
    padding: 7,
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

  const isOperation =
    label === '+' ||
    label === '-' ||
    label === 'x' ||
    label === '/' ||
    label === '=';

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onClick()}>
        {label === '+' ? <AntDesign name="plus" style={stylesButton} /> : null}
        {label === '-' ? <AntDesign name="minus" style={stylesButton} /> : null}
        {label === 'x' ? <AntDesign name="close" style={stylesButton} /> : null}
        {label === '/' ? <Feather name="divide" style={stylesButton} /> : null}
        {label === '=' ? (
          <MaterialCommunityIcons name="equal" style={stylesButton} />
        ) : null}
        {!isOperation ? <Text style={stylesButton}>{label}</Text> : null}
      </TouchableOpacity>
    </View>
  );
};
