import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Or your preferred splash background color
  },
});

export default SplashScreen;
