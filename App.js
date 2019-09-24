import React from 'react';
import { StyleSheet, Text, View, StatusBar, StatusBarIOS, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>Hello world!</Text>
      <Text>{process.env.API_URL}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
});