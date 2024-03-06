import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import SearchModal from './screens/SearchModal';
import PlayerModal from './screens/PlayerModal';
import SearchButton from './components/SearchButton';
import ProfileButton from './components/ProfileButton';
import ProfileModal from './screens/ProfileModal';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
          
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>

          <Stack.Screen name="Home" component={HomeScreen} 
            options={({ navigation }) => ({
              headerRight: () => (
                <SearchButton navigation={navigation} />
              ),
              headerLeft: () => (
                <ProfileButton navigation={navigation}/>
              ),
              headerTitleAlign: "center",
              headerTitle: 'StatTracker' 
            })}
          />

          {/*Search Modal*/}
          <Stack.Screen 
            name="Search"
            component={SearchModal} 
            options={{ 
              presentation: 'modal',
              headerTitleAlign: "center"
            }}
          />

          {/* Player Modal */}
          <Stack.Screen 
            name="Player"
            component={PlayerModal}
            options={{
              presentation: 'modal',
              headerTitleAlign: "center",
              headerTitle: '' 
            }}
          />

          {/* Profile Modal */}
          <Stack.Screen
            name="Profile"
            component={ProfileModal}
            options={{
              presentation: 'modal',
              headerTitleAlign: "center",
              headerTitle: '' 
            }}
          />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;