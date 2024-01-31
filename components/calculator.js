import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../styles';

export default function Calculator({ onCalculate, ...props}) {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    const sum = () => {
        const result = parseFloat(number1) + parseFloat(number2);
        setResult(result);
        onCalculate(`${number1} + ${number2} = ${result}`);
    }

    const sub = () => {
        const result = parseFloat(number1) - parseFloat(number2);
        setResult(result);
        onCalculate(`${number1} - ${number2} = ${result}`);
    }

    return (
        <>
        <View>
      <Button title="History" onPress={() => props.navigation.navigate('History')} />
        </View>
        <View style={styles.container}>
            <Text>Simple calculator app</Text>
            <Text>Result: {result}</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setNumber1(text)}
                value={number1}
                placeholder="Insert number"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setNumber2(text)}
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
        </View>
        </>
    );
}