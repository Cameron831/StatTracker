import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TrackerView from '../components/TrackerView';

const HomeScreen = ({ navigation }) => {
  const [trackingInfo, setTrackingInfo] = useState(null);

  useEffect(() => {
    const getTracking = async () => {
      try {
        const token = await AsyncStorage.getItem('LOGIN_TOKEN');
        const tracking = await axios.get(`http://192.168.1.13:3000/user/tracking/${token}`);
        setTrackingInfo(tracking.data);
      } catch (error) {
        console.error("Error fetching tracking", error);
      }
    };

    const subscribe = navigation.addListener('focus', getTracking);

    return subscribe
  }, [navigation]);

  return (
    <View>
      {trackingInfo && (
        <TrackerView trackingInfo={trackingInfo} navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
});

export default HomeScreen;
