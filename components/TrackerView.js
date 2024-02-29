import React, {useState} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import TrackedPlayer from './TrackedPlayerAlt';

const TrackerView = ({trackingInfo}) => {

  return (
    <View style={styles.container}>
      <FlatList
          data={trackingInfo}
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