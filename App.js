import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Home from "./screens/Home";

export default function App() {
  return (
    <View style={styles.container}>

      <Home/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight
  },
});