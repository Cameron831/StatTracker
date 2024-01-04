import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PizzaTranslator from '../components/PizzaTranslator';
import { common } from '../stylesheets/styles';

const HomeScreen = () => {
  return (
    <View style={common.screenContainer}>
      <Text>Home Screen</Text>
      <PizzaTranslator />
    </View>
  );
}

export default HomeScreen;