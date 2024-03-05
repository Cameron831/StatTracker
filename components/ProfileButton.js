import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProfileButton = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
            <AntDesign name="user" size={20} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profileButton: {
        position: 'absolute',
        left: 20,
      },
  });

export default ProfileButton;
