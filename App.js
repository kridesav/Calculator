import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, onChangeNumber, number, Button } from 'react-native';
import React from 'react';

export default function App() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [result, setResult] = React.useState(null);

  const sum = () => {
    setResult(parseFloat(number1) + parseFloat(number2));
  }
  
  const sub = () => {
    setResult(parseFloat(number1) - parseFloat(number2));
  }

  return (
    <View style={styles.container}>
      <Text>Simple calculator app</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Insert number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Insert number"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="+" 
            onPress={sum}
          />
        </View>
        <View style={styles.button}>
          <Button title="-" 
            onPress={sub}
          />
        </View>
      </View>

      <Text>Result: {result}</Text>
      <StatusBar style="auto" />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '60%',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginBottom: 20,
  },
  button: {
    width: 50,
  },
});
