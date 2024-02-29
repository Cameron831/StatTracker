import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import TrackerView from '../components/TrackerView';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trackingInfo, setTrackinfInfo] = useState(null)

  useEffect(() => {
    const getTracking = async () => {
      try {
        const tracking = await axios.get("http://192.168.1.13:3000/user/65deaba5946c295b3481d0c3")
        console.log(tracking.data)
        setTrackinfInfo(tracking.data)
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching tracking", error)
      }
    }
    getTracking()
  }, []);

  return (
    <View>
      {isLoading && 
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      }
      

      <View>
        <TrackerView
          trackingInfo = {trackingInfo}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({

});


export default HomeScreen;