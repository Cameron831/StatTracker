import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PizzaTranslator from '../components/PizzaTranslator';
import { common } from '../stylesheets/styles';
import TrackerView from '../components/TrackerView';
import PlayerSearch from '../components/PlayerSearch';

const HomeScreen = () => {
  return (
    <View style={common.screenContainer}>
      <TrackerView/>
      <PizzaTranslator />
    </View>
  );
}

export default HomeScreen;