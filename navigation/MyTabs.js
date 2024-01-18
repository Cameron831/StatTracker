import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewsScreen from '../screens/NewsScreen';
import StandingsScreen from '../screens/StandingsScreen';

import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const showSearch = () => {

  }

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.clearButton} onPress={showSearch}>
              <AntDesign name="search1" size={20} color="black" />
            </TouchableOpacity>
          )
        }}
      />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Standings" component={StandingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  clearButton: {
      position: 'absolute',
      right: 20,
    },
});