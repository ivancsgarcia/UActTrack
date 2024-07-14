import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Link } from 'expo-router';
import React from 'react';

export default function Index() {

  const [text, setText] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="Enter email" onChangeText={setText} value={text} keyboardType="email-address" />
      <Text>Password</Text>
      <TextInput style={styles.input} placeholder="Enter password" onChangeText={setPassword} value={password} secureTextEntry="true"/>
      <Button style={styles} title="Log In" />
      <Link href="/registration"><Button style={styles} title="Register Now" /></Link>
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