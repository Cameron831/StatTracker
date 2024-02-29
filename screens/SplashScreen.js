import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    // Simulate fetching data or any startup task
    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000); // Keep the splash screen for 3 seconds
  }, []);


  return ( 
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Or your preferred splash background color
  },
});

export default SplashScreen;
