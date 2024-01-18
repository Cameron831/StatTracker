import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { common } from '../stylesheets/styles';
import PlayerSearch from '../components/PlayerSearch';


const SettingsScreen = () => {
  return (
    <View style={common.screenContainer}>
      <PlayerSearch/>
    </View>
  );
}

export default SettingsScreen;