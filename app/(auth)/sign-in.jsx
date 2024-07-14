import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} placeholder='Enter your email' keyboardType='email-address' />
      <Text>Password</Text>
      <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry='true' />
      <Button title='Sign In' />
      <Link href="(home)/dashboard"><Button style={styles} title="Go to Home" /></Link>
    </View>
  )
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

export default SignIn