import React, {useState} from 'react';
import {Text, TextInput, View, FlatList, StyleSheet, Modal} from 'react-native';
import { common } from '../stylesheets/styles';
const playersData = require('../players.json');
const players = playersData.players

const PlayerSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');


    const filteredPlayers = playersData.players.filter(player =>
        player.PLAYER_SLUG.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10);


  
    return (
      <View>

        <TextInput
            placeholder="Search for a player"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            style={styles.input}
        />
        {searchQuery.length > 0 && (
            <FlatList
                data={filteredPlayers}
                keyExtractor={item => item.PERSON_ID.toString()}
                renderItem={({ item }) => <Text>{item.PLAYER_FIRST_NAME} {item.PLAYER_LAST_NAME}</Text>}
            />
        )}
    
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
    },
  });

  export default PlayerSearch;