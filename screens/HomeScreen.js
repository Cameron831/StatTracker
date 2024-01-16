import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PlayerSearchItem from '../components/PlayerSearchItem';
import { common } from '../stylesheets/styles';


const HomeScreen = () => {
  return (
    <View style={common.screenContainer}>
      <PlayerSearchItem></PlayerSearchItem>
    </View>
  );
}

export default HomeScreen;