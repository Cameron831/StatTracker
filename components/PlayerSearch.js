import React, {useState} from 'react';
import {Text, TextInput, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PlayerSearchItem from './PlayerSearchItem';
const playersData = require('../players.json');
const players = playersData.players

const PlayerSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');


    const filteredPlayers = playersData.players.filter(player =>
        player.PLAYER_SLUG.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10);

    const clearSearch = () => {
      setSearchQuery('');
    };
  
    return (
      <View style={styles.window} >

        <View style={styles.searchBar}>
          <TextInput
              placeholder="Search for a player"
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
              style={styles.input}
          />
          {searchQuery.length > 0 && (
              <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
                <AntDesign name="closecircle" size={20} color="grey" />
              </TouchableOpacity>
          )}
        </View>
        
        {searchQuery.length > 0 && (
          <View>
            <FlatList
                data={filteredPlayers}
                keyExtractor={item => item.PERSON_ID.toString()}
                renderItem={({ item }) => <PlayerSearchItem player={item}/>}
                style={styles.list}
            />
          </View>
        )}
    
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#EEE',
      borderRadius: 20,
      paddingHorizontal: 10,
      borderWidth: 1
    },
    input: {
      flex: 1,
      padding: 10,
      paddingRight: 30,
    },
    window: {
      height: '100%',
      width: '95%',
    },
    clearButton: {
      position: 'absolute',
      right: 10,
    },
    list: {
      padding: 10,
      margin: 10
    }
  });

  export default PlayerSearch;