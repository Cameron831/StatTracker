import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
      if (email && password) {
          setIsButtonEnabled(true);
      } else {
          setIsButtonEnabled(false);
      }
  }, [email, password]);

  const handleLogin = async () => {
      try {
          const response = await axios.post("http://3.133.152.176:3000/user/login", { email: email, password: password });

          if (response.status === 200) {
              await AsyncStorage.setItem('LOGIN_TOKEN', `${response.data._id}`);
              navigation.replace('Home');
          } else {
              console.log("Unexpected status code:", response.status);
              Alert.alert("Login Failed", "Unexpected response from the server.");
          }
      } catch (error) {
          if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              const message = error.response.data.message || "An error occurred during login.";
              
              if (error.response.status === 404) {
                  Alert.alert("Login Failed", "Email not found.");
              } else if (error.response.status === 500) {
                  Alert.alert("Login Failed", message);
              } else {
                  Alert.alert("Login Failed", message);
              }
          } else if (error.request) {
              console.log(error.request);
              Alert.alert("Login Failed", "No response from the server. Please try again later.");
          } else {
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
          <Button title="Login" onPress={handleLogin} disabled={!isButtonEnabled} />
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
