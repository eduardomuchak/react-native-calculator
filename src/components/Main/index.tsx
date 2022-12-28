import { StyleSheet, Text, View } from 'react-native';
import { CalcButton } from '../CalcButton';
import CalcDisplay from '../Display';
import { useState } from 'react';

export default function Main() {
  const [displayValue, setDisplayValue] = useState(0);

  const addDigit = (n: number) => {
    setDisplayValue(n);
  };

  const clearMemory = () => {
    console.warn('AC');
    setDisplayValue(0);
  };

  const setOperation = (operation: string) => {
    console.warn(operation);
  };

  return (
    <View style={styles.container}>
      <CalcDisplay value={displayValue} />
      <View style={styles.buttons}>
        <CalcButton label="AC" onClick={() => clearMemory()} triple />
        <CalcButton label="/" onClick={() => setOperation('/')} operation />
        <CalcButton label="7" onClick={() => addDigit(7)} />
        <CalcButton label="8" onClick={() => addDigit(8)} />
        <CalcButton label="9" onClick={() => addDigit(9)} />
        <CalcButton label="*" onClick={() => setOperation('*')} operation />
        <CalcButton label="4" onClick={() => addDigit(4)} />
        <CalcButton label="5" onClick={() => addDigit(5)} />
        <CalcButton label="6" onClick={() => addDigit(6)} />
        <CalcButton label="-" onClick={() => setOperation('-')} operation />
        <CalcButton label="1" onClick={() => addDigit(1)} />
        <CalcButton label="2" onClick={() => addDigit(2)} />
        <CalcButton label="3" onClick={() => addDigit(3)} />
        <CalcButton label="+" onClick={() => setOperation('+')} operation />
        <CalcButton label="0" onClick={() => addDigit(0)} />
        <CalcButton label="." onClick={() => console.warn('.')} />
        <CalcButton label="=" onClick={() => console.warn('=')} double />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
