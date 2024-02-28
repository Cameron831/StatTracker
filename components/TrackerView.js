import React, {useState} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
//import TrackedPlayer from './TrackedPlayer';
import TrackedPlayer from './TrackedPlayerAlt';

const playersData = require('../players.json');
const players = playersData.players

const TrackerView = ({trackingInfo}) => {
  console.log(trackingInfo)

  const filteredPlayers = playersData.players.filter(player =>
    player.PLAYER_SLUG.toLowerCase()
  ).slice(0, 10);

  console.log(filteredPlayers)

  return (
    <View style={styles.container}>
      <FlatList
          data={filteredPlayers}
          keyExtractor={item => item.PERSON_ID.toString()}
          renderItem={({ item }) => (
            <TrackedPlayer player={item}/>
          )}
          style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  list: {

  }

})

export default TrackerView;