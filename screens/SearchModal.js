import React from 'react';
import PlayerSearch from '../components/PlayerSearch';
import { View, StyleSheet} from 'react-native';
import { common } from '../stylesheets/styles';

const SearchModal = ({ navigation }) => {
  return (
    <View style={common.screenContainer}>
        <PlayerSearch 
            style={styles.search}
        />
    </View>

  );
}

const styles = StyleSheet.create({

})

export default SearchModal;