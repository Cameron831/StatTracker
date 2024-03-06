import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    // Define an async function to check the login token
    const checkLoginToken = async () => {
      try {
        // Attempt to retrieve the login token
        const token = await AsyncStorage.getItem('LOGIN_TOKEN');
        // Navigate based on token presence
        if (token) {
          // If token exists, navigate to the Home screen
          navigation.replace('Home');
        } else {
          // If no token, navigate to the Login screen
          navigation.replace('Login');
        }
      } catch (e) {
        // If there's an error, you might want to handle it or navigate to an error screen
        console.error(e);
      }
    };

    // Call the function
    checkLoginToken();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default SplashScreen;
