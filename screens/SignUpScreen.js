import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
      if (email && password && confirmPassword && password === confirmPassword) {
          setIsButtonEnabled(true);
      } else {
          setIsButtonEnabled(false);
      }
  }, [email, password, confirmPassword]);

  const handleSignUp = async () => {
      if (password !== confirmPassword) {
          Alert.alert("Passwords do not match", "Please make sure your passwords match.");
          return;
      }

      try {
          console.log('Signing up with:', email, password);
          const user = {email: email, password: password };
          const signup = await axios.post("https://parlazyapi.cameronharris.dev:3000/user/", user);
          navigation.navigate('Login');
      } catch (error) {
          console.error(error);
      }
  };

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
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
          <Button title="Sign Up" onPress={handleSignUp} disabled={!isButtonEnabled} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text>Already have an account? Login</Text>
          </TouchableOpacity>
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
