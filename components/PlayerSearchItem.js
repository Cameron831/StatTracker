import React, {useState} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const PlayerSearchItem = (props) => {
    if (!props.player) return null;
    
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/'+props.player.PERSON_ID+'.png'
                }}
                style={styles.img}
            />
            <Text style={styles.text} >{props.player.PLAYER_FIRST_NAME} {props.player.PLAYER_LAST_NAME}</Text>
            {/*<Text style={styles.text} >{props.player.TEAM_ABBREVIATION}</Text>*/}
            {/*<Text style={styles.text} >#{props.player.JERSEY_NUMBER}</Text>*/}
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        padding: 15
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'grey',
    },
    text: {
        fontSize: 20,
        marginLeft: 20
    },
    test: {
        borderWidth: 1
    }

  });

  export default PlayerSearchItem;