import { StyleSheet, Text, View } from 'react-native';
import { CalcButton } from '../CalcButton';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <CalcButton label="AC" onClick={() => console.warn('AC')} />
        <CalcButton label="/" onClick={() => console.warn('/')} />
        <CalcButton label="7" onClick={() => console.warn('7')} />
        <CalcButton label="8" onClick={() => console.warn('8')} />
        <CalcButton label="9" onClick={() => console.warn('9')} />
        <CalcButton label="*" onClick={() => console.warn('*')} />
        <CalcButton label="4" onClick={() => console.warn('4')} />
        <CalcButton label="5" onClick={() => console.warn('5')} />
        <CalcButton label="6" onClick={() => console.warn('6')} />
        <CalcButton label="-" onClick={() => console.warn('-')} />
        <CalcButton label="1" onClick={() => console.warn('1')} />
        <CalcButton label="2" onClick={() => console.warn('2')} />
        <CalcButton label="3" onClick={() => console.warn('3')} />
        <CalcButton label="+" onClick={() => console.warn('+')} />
        <CalcButton label="0" onClick={() => console.warn('0')} />
        <CalcButton label="." onClick={() => console.warn('.')} />
        <CalcButton label="=" onClick={() => console.warn('=')} />
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
