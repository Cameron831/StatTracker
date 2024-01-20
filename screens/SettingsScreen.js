import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';
import { common } from '../stylesheets/styles';

const SettingsScreen = () => {


  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/test.png')}
          style={styles.image}
        />
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '50%', // Set the height to the value you want
    overflow: 'hidden',    // This hides the part of the image outside the container
    backgroundColor: '#0268d6'
  },
  image: {
    width: '60%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 5,               // Align the top of the image with the container
  },
});

export default SettingsScreen;