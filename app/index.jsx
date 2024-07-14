import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Link } from 'expo-router';
import React from 'react';

export default function Index() {

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Link href="(auth)/sign-in"><Button style={styles} title="Sign In" /></Link>
      <Text>Or</Text>
      <Link href="(auth)/sign-up"><Button style={styles} title="Sign Up" /></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})