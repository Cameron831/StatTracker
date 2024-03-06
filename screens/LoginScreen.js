import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const response = await axios.post("http://192.168.1.13:3000/user/login", {email: email, password: password})

        if (response.status === 200) {
            await AsyncStorage.setItem('LOGIN_TOKEN', `${response.data._id}`);
            //Alert.alert("Login Successful", "You have successfully logged in.");
            // If login is successful, navigate to Home
            navigation.replace('Home');
        } else {
            // Handle any other successful responses with unexpected status codes
            console.log("Unexpected status code:", response.status);
            Alert.alert("Login Failed", "Unexpected response from the server.");
        }
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            const message = error.response.data.message || "An error occurred during login.";
      
            if (error.response.status === 404) {
              Alert.alert("Login Failed", "Email not found.");
            } else if (error.response.status === 500) {
              Alert.alert("Login Failed", message);
            } else {
              // Handle any other errors with a status code
              Alert.alert("Login Failed", message);
            }
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            Alert.alert("Login Failed", "No response from the server. Please try again later.");
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            Alert.alert("Login Failed", "An error occurred. Please try again.");
          }
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.switchText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
