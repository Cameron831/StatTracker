import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import SearchModal from './screens/SearchModal';
import PlayerModal from './screens/PlayerModal';

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">

          <Stack.Screen name="Splash" component={SplashScreen}/>

          <Stack.Screen name="Home" component={HomeScreen} />


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
      </NavigationContainer>
    );
  }

  export default App;