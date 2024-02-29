import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import TrackerView from '../components/TrackerView';

const HomeScreen = ({ navigation }) => {
  const [trackingInfo, setTrackingInfo] = useState(null);

  useEffect(() => {
    const getTracking = async () => {
      try {
        const tracking = await axios.get("http://192.168.1.13:3000/user/65deaba5946c295b3481d0c3");
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
        <TrackerView trackingInfo={trackingInfo} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
});

export default HomeScreen;
