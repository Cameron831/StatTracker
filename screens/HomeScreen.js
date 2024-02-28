import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { common } from '../stylesheets/styles';
import TrackerView from '../components/TrackerView';

const HomeScreen = ({trackingInfo}) => {
  return (
    <View>
      <TrackerView trackingInfo={trackingInfo}/>
    </View>
  );
}

const styles = StyleSheet.create({

});


export default HomeScreen;