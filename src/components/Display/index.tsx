import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

interface Props {
  value: string;
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#000',
    fontFamily: 'Poppins_500Medium',
  },
});

function CalcDisplay({ value }: Props) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

export default CalcDisplay;
