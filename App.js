import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

      <AppNavigator/>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
});