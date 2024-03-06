import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {designVariables} from '../stylesheets/styles';

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
      
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Welcome to StatTracker</Text>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.about}>
          StatTracker was built to be your sports betting companion.
          No more sifting through dense box scores to see how close you are
          to hitting on your last leg. This is an ongoing personal project,
          follow me on X @Cam_831 for updates or to reach out.
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Account Information</Text>
        <View style={styles.divider}/>
        <Text style={styles.infoText}>Username: {user.username}</Text>
        <Text style={styles.infoText}>Email: {user.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>About</Text>
        <View style={styles.divider}/>
        <Text style={styles.infoText}>Version: 1.0</Text>
        <Text style={styles.infoText}>System: Android</Text>
      </View>

      {/*onPress={handleSignOut}*/}
      <TouchableOpacity style={styles.signOutButton} onPress={() => console.log('Sign out pressed')}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // /justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
    backgroundColor: designVariables.white
  },
  infoContainer: {
    width: "90%",
    marginTop: 25,
  },
  greetingContainer: {
    alignItems: 'center',
  },
  greeting: {
    fontSize: 35,
    marginVertical: 25,
    color: designVariables.black,
    //fontWeight: "bold"
  },
  aboutContainer: {
    width: "90%",
    alignItems: 'center',
    marginVertical: 10
  },
  about: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.25,
    //textAlign: 'justify',
  },
  infoTitle: {
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  signOutButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: designVariables.primary,
    alignItems: 'center',
    width: "60%",
  },
  buttonText: {
    color: designVariables.white,
    fontSize: 20,
    marginVertical: 5
  }
});

export default ProfileModal;
