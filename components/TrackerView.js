import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import TrackedPlayer from './TrackedPlayer';

const playersData = require('../players.json');
const players = playersData.players

const TrackerView = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TrackedPlayer player={players[0]}/>
      <TrackedPlayer player={players[0]}/>
      <TrackedPlayer player={players[0]}/>
      <TrackedPlayer player={players[0]}/>
      <TrackedPlayer player={players[0]}/>
      <TrackedPlayer player={players[0]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }

})

export default TrackerView;