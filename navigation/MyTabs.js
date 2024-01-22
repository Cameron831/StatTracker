//React Imports
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

//My Screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewsScreen from '../screens/NewsScreen';
import StandingsScreen from '../screens/StandingsScreen';
import SearchModal from '../screens/SearchModal';
import PlayerModal from '../screens/PlayerModal';


//Icons
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MyTabs() {

  return (
      <Stack.Navigator>
        {/* Tab Navigator as a screen of the Stack Navigator */}
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator>
              <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                  headerRight: () => {
                    const navigation = useNavigation();
                    return (
                      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Search')}>
                        <AntDesign name="search1" size={20} color="black" />
                      </TouchableOpacity>
                    );
                  },
                }}
              />
              <Tab.Screen name="News" component={NewsScreen} />
              <Tab.Screen name="Standings" component={StandingsScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
    
        {/*Search Modal*/}
        <Stack.Screen 
          name="Search"
          component={SearchModal} 
          options={{ 
            presentation: 'modal'
          }}
        />
        {/* Player Modal */}
        <Stack.Screen 
          name="Player"
          component={PlayerModal}
          options={{
            presentation: 'modal'
          }}
        />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  searchButton: {
      position: 'absolute',
      right: 20,
    },
});