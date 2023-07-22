import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Invalid Expression');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    ['C', 'DEL', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['.', '0', '=', ''],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.expressionContainer}>
        <Text style={styles.expressionText}>{expression}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((row, index) => {
          return (
            <View key={index} style={styles.row}>
              {row.map((buttonValue) => {
                return (
                  <TouchableOpacity
                    key={buttonValue}
                    style={styles.button}
                    onPress={() => handleButtonPress(buttonValue)}>
                    <Text style={styles.buttonText}>{buttonValue}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  expressionContainer: {
    flex: 2,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  expressionText: {
    fontSize: 24,
    color: '#333',
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  resultText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flex: 7,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
