import React, {useState} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import TrackedPlayer from './TrackedPlayerAlt';

const TrackerView = ({trackingInfo}) => {
  const filteredTracking = trackingInfo.filter(item => item.AST || item.BLK || item.PTS || item.REB || item.STL || item.TPM)
  
  return (
    <View style={styles.container}>
      <FlatList
          data={filteredTracking}
          keyExtractor={item => item.player}
          renderItem={({ item }) => (
            <TrackedPlayer item={item}/>
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