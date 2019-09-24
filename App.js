import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import Home from "./screens/Home";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

      <Home/>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
});