import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider } from 'react-redux';
import Counter from './component/counter';

import {store} from './redux/store'

export default function App() {
  
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});