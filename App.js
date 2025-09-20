// App.js
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CounterApp from './CounterApp';
import ColorChangeApp from './ColorChangeApp';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <CounterApp />
        <ColorChangeApp />
      </ScrollView>
      
      
      
      
    </SafeAreaView>
  );
}