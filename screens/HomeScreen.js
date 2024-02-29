import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import TrackerView from '../components/TrackerView';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [trackingInfo, setTrackinfInfo] = useState(null)

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      getTracking()
    })
    return subscribe
  }, [navigation]);

  const getTracking = async () => {
    try {
      const tracking = await axios.get("http://192.168.1.13:3000/user/65deaba5946c295b3481d0c3")
      setTrackinfInfo(tracking.data)
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tracking", error)
    }
  }

  return (
    <View>
      {isLoading && !trackingInfo &&
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