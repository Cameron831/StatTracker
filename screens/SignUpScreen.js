import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';


const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
    // Add validation for the inputs, e.g., check if password and confirmPassword match
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match", "Please make sure your passwords match.");
      return;
    }
    
    try {    
        // Implement your signup logic here, e.g., call to your backend
        console.log('Signing up with:', username, email, password);
        const user = {username: username, email: email, password: password}
        const signup = await axios.post("http://192.168.1.13:3000/user/", user)
        // On successful signup, you might want to navigate to the login page or directly to the home page
        navigation.navigate('Login');
    } catch (error) {
        
    }

  };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
        />
        <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            autoCapitalize="none"
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <Button
            title="Already have an account? Login"
            onPress={() => navigation.navigate('Login')}
        />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 10,
  },
});

export default SignUpScreen;
