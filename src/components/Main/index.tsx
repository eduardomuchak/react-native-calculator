import { StyleSheet, View } from 'react-native';
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
    let actualValue = validateClearDisplay ? '' : displayValue;
    const lastChar = actualValue[actualValue.length - 1];

    if (lastChar === '(') {
      actualValue += '0';
    }

    if (operation) {
      const openParenthesisCount =
        (actualValue + label).match(/\(/g)?.length || 0;
      const closedParenthesisCount =
        (actualValue + label).match(/\)/g)?.length || 0;
      if (openParenthesisCount !== closedParenthesisCount) {
        const newValues = [...valuesArray];
        newValues[1] = Number(actualValue + label);

        setDisplayValue(`${valuesArray[0]} ${operation} ${newValues[1]}`);
        setValuesArray(newValues);
      } else {
        const newValues = [...valuesArray];
        newValues[1] = eval(actualValue + label);

        setDisplayValue(`${valuesArray[0]} ${operation} ${newValues[1]}`);
        setValuesArray(newValues);
      }
    } else {
      const newValues = [...valuesArray];
      newValues[0] = Number(actualValue + label);

      setDisplayValue(newValues[0]);
      setValuesArray(newValues);
    }

    setClearDisplay(false);
  }

  function addOperation(operationValue: string) {
    if (valuesArray[0] === 0) return;

    if (index === 0) {
      setIndex(1);
      setOperation(operationValue);
      setClearDisplay(true);

      setDisplayValue(`${displayValue} ${operationValue}`);
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

  function openParenthesis() {
    const lastChar = displayValue[displayValue.length - 1];
    let newDisplayValue = displayValue;

    if (displayValue === '0') {
      newDisplayValue = '(';
    } else {
      newDisplayValue += '(';
    }

    setDisplayValue(newDisplayValue);
  }

  function closeParentesis() {
    const lastChar = displayValue[displayValue.length - 1];
    const openParenthesisCount = (displayValue.match(/\(/g) || []).length;
    const closedParenthesisCount = (displayValue.match(/\)/g) || []).length;

    if (
      lastChar === '.' ||
      lastChar === '0' ||
      lastChar === '1' ||
      lastChar === '2' ||
      lastChar === '3' ||
      lastChar === '4' ||
      lastChar === '5' ||
      lastChar === '6' ||
      lastChar === '7' ||
      lastChar === '8' ||
      lastChar === '9' ||
      lastChar === '(' ||
      lastChar === ')'
    ) {
      if (openParenthesisCount > closedParenthesisCount) {
        setDisplayValue(displayValue + ')');
      }
    }
  }

  return (
    <View style={styles.container}>
      <CalcDisplay value={displayValue} />
      <View style={styles.buttons}>
        <CalcButton label="C" onClick={() => clear()} operation />
        <CalcButton label="(" onClick={() => openParenthesis()} />
        <CalcButton label=")" onClick={() => closeParentesis()} />
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
