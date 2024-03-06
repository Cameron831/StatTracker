import React, {useState, useCallback} from 'react';
import {Alert, FlatList, View, StyleSheet, RefreshControl, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import TrackedPlayer from './TrackedPlayer';

const TrackerView = ({trackingInfo, navigation, refreshTrackingInfo}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Increment refreshKey to trigger a re-fetch in each TrackedPlayer
    setRefreshKey(prevKey => prevKey + 1);
    // Simulate a network request for demo purposes
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
  }, []);

  const handleLongPress = (playerId) => {
    Alert.alert("Delete Player", "Are you sure you want to delete this player?", [
      { text: "Cancel" },
      { text: "Delete", onPress: () => deletePlayer(playerId) },
    ]);
  };

  const deletePlayer = async (playerId) => {
    try {
      const token = await AsyncStorage.getItem('LOGIN_TOKEN');
      const playerData = {
        player: playerId,
        PTS: false,
        REB: false,
        AST: false,
        TPM: false,
        BLK: false,
        STL: false,
        user: token
      };
      const response = await axios.put("http://192.168.1.13:3000/user/tracking", playerData);

      if (response.status === 200) {
        // Call the passed-down function to refresh tracking data
        refreshTrackingInfo();
      }

    } catch (error) {
      console.error("Error updating tracking info", error);
    }
  };

  const filteredTracking = trackingInfo.filter(item => item.AST || item.BLK || item.PTS || item.REB || item.STL || item.TPM);

  return (
    <View style={styles.container}>
      <FlatList
          data={filteredTracking}
          keyExtractor={item => item.player}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Player', {playerId: item.player})}
              onLongPress={() => handleLongPress(item.player)}
            > 
              <TrackedPlayer item={item} refreshKey={refreshKey}/>
            </TouchableOpacity>
          )}
          style={styles.list}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
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