import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './components/calculator';
import History from './components/history';

const Stack = createStackNavigator();

export default function App() {
  const [history, setHistory] = useState([]);

  const handleCalculate = calculation => {
    setHistory([...history, { key: Math.random().toString(), data: calculation }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator">
          {props => <Calculator {...props} onCalculate={handleCalculate} />}
        </Stack.Screen>
        <Stack.Screen name="History">
          {props => <History {...props} history={history} />}
        </Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}