import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileModal = ({ navigation }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
  });

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const token = await AsyncStorage.getItem('LOGIN_TOKEN');
        const userInfo = await axios.get(`http://192.168.1.13:3000/user/${token}`)
        const userData = {username: userInfo.data.username, email: userInfo.data.email}
        setUser(userData);
      } catch (error) {
        Alert.alert("Error", "Failed to load user information.");
      }
    };

    loadUserInfo();
  }, []);

  const handleSignOut = async () => {
    // Clear the stored login token or user information to sign out
    await AsyncStorage.removeItem('LOGIN_TOKEN');
    // Navigate back to the login screen
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Username: {user.username}</Text>
      <Text style={styles.infoText}>Email: {user.email}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileModal;
