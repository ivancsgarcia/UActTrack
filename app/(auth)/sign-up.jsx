import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const SignUp = () => {
    const [text, setText] = React.useState("")
    const [password, setPassword] = React.useState("")
  
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" onChangeText={setText} value={text} keyboardType="email-address" />
        <Text>Password</Text>
        <TextInput style={styles.input} placeholder="Create password" onChangeText={setPassword} value={password} secureTextEntry="true"/>
        <Text>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" onChangeText={setPassword} value={password} secureTextEntry="true"/>
        <Button style={styles} title="Sign up" />
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

export default SignUp