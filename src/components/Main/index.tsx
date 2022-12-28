import { StyleSheet, Text, View } from 'react-native';
import { CalcButton } from '../CalcButton';
import CalcDisplay from '../Display';
import { useState } from 'react';

export default function Main() {
  const [displayValue, setDisplayValue] = useState<any>('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState<any>(null);
  const [valuesArray, setValuesArray] = useState([0, 0]);
  const [index, setIndex] = useState(0);

  function addDigit(label: string) {
    if (label === '.' && displayValue.includes('.')) return;

    const validateClearDisplay = displayValue === '0' || clearDisplay;
    const actualValue = validateClearDisplay ? '' : displayValue;

    const newDisplayValue = actualValue + label;
    const newValues = [...valuesArray];

    if (label !== '.') newValues[index] = parseFloat(newDisplayValue);

    setDisplayValue(newDisplayValue);
    setClearDisplay(false);
    setValuesArray(newValues);
  }

  function addOperation(operationValue: string) {
    if (valuesArray[0] === 0) return;

    if (index === 0) {
      setIndex(1);
      setOperation(operationValue);
      setClearDisplay(true);
    } else {
      const equal = operationValue === '=';
      const newValues = [...valuesArray];

      try {
        newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`);
      } catch (error) {
        newValues[0] = valuesArray[0];
      }

      newValues[1] = 0;

      setDisplayValue(newValues[0]);
      setClearDisplay(!equal);
      setOperation(equal ? null : operationValue);
      setValuesArray(newValues);
      setIndex(equal ? 0 : 1);
    }
  }

  function clear() {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation(null);
    setValuesArray([0, 0]);
    setIndex(0);
  }

  return (
    <View style={styles.container}>
      <CalcDisplay value={displayValue} />
      <View style={styles.buttons}>
        <CalcButton label="AC" onClick={() => clear()} triple />
        <CalcButton label="/" onClick={() => addOperation('/')} operation />
        <CalcButton label="7" onClick={() => addDigit('7')} />
        <CalcButton label="8" onClick={() => addDigit('8')} />
        <CalcButton label="9" onClick={() => addDigit('9')} />
        <CalcButton label="x" onClick={() => addOperation('*')} operation />
        <CalcButton label="4" onClick={() => addDigit('4')} />
        <CalcButton label="5" onClick={() => addDigit('5')} />
        <CalcButton label="6" onClick={() => addDigit('6')} />
        <CalcButton label="-" onClick={() => addOperation('-')} operation />
        <CalcButton label="1" onClick={() => addDigit('1')} />
        <CalcButton label="2" onClick={() => addDigit('2')} />
        <CalcButton label="3" onClick={() => addDigit('3')} />
        <CalcButton label="+" onClick={() => addOperation('+')} operation />
        <CalcButton label="0" onClick={() => addDigit('0')} double />
        <CalcButton label="." onClick={() => addDigit('.')} />
        <CalcButton label="=" onClick={() => addOperation('=')} operation />
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
