import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation/MyTabs';
import SplashScreen from './screens/SplashScreen';

export default function App() {
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

  if (isLoading) {
    return <SplashScreen />;
  }
  
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs 
        trackingInfo={trackingInfo}
      />
    </NavigationContainer>
  );
}