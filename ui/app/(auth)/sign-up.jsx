import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import axios from 'axios'

const SignUp = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [errors, setErrors] = React.useState({})

    function handleSubmit(event) {
      event.preventDefault();
      if(validateForm()) {
        if(password === confirmPassword) {
          axios.post('http://localhost:8081/create', {email, password})
      .then(res => {
        console.log (res);
        <Link href={'(home)/dashboard'}/>;
      }).catch(err => console.log(err));
        }
        else {
          return console.log('Password doesn`t match')
        }
      }

      else {
        return console.log('error')
      }
      
      // if(validateForm()) {
      //   console.log("Submitted", email, password);
      //   setEmail('');
      //   setPassword('');
      //   setConfirmPassword('');
      //   setErrors({});
      // }
    }

    function validateForm() {
      let errors = {};

      if (!email) errors.email = 'Email is required';
      if (!password) errors.password = 'Password is required';
      if (!confirmPassword) errors.confirmPassword = 'Confirm your password';

      setErrors(errors);

      return Object.keys(errors).length === 0;
    }
  
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" onChangeText={setEmail} value={email} keyboardType="email-address" />
        {errors.email ? (<Text>{errors.email}</Text>) : null}

        <Text>Password</Text>
        <TextInput style={styles.input} placeholder="Create password" onChangeText={setPassword} value={password} secureTextEntry="true"/>
        {errors.password ? (<Text>{errors.password}</Text>) : null}

        <Text>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" onChangeText={setConfirmPassword} value={confirmPassword} secureTextEntry="true"/>
        {errors.confirmPassword ? (<Text>{errors.confirmPassword}</Text>) : null}

        <Button style={styles} title="Sign up" onPress={handleSubmit} />

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