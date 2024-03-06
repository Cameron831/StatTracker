import React, {useState, useCallback} from 'react';
import {Text, FlatList, View, StyleSheet, RefreshControl, TouchableOpacity} from 'react-native';
import TrackedPlayer from './TrackedPlayer';

const TrackerView = ({trackingInfo, navigation}) => {
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

  const filteredTracking = trackingInfo.filter(item => item.AST || item.BLK || item.PTS || item.REB || item.STL || item.TPM);

  return (
    <View style={styles.container}>
      <FlatList
          data={filteredTracking}
          keyExtractor={item => item.player}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Player', {playerId: item.player})}>
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