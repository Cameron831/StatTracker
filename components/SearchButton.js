import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchButton = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Search')}>
            <AntDesign name="search1" size={20} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    searchButton: {
        position: 'absolute',
        right: 20,
      },
  });

export default SearchButton;
