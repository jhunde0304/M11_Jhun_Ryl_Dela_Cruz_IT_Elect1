import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangeApp() {
  const [bgColor, setBgColor] = useState('#ffffff'); // default white

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="White" onPress={() => setBgColor('#ffffff')} />
      <Button title="Light Gray" onPress={() => setBgColor('#b4b4b4')} />
      <Button title="Light Green" onPress={() => setBgColor('#90ee90')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, padding:50 }
});