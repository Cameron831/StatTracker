import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Switch} from 'react-native';
import {common, teamColors, teamLogos} from '../stylesheets/styles';

const trackedPlayersData = require('../trackedStats.json')
const tp = trackedPlayersData.trackedPlayers

const PlayerModal = ({route}) => {
    const {player} = route.params
    const teamColor = teamColors[player.TEAM_ABBREVIATION]

    const [trackedPlayers, setTrackedPlayers] = useState(tp);

    const toggleStat = (playerID, stat) => {
      setTrackedPlayers(currentPlayers => {
        let updatedPlayers = currentPlayers.map(p => {
          if (p.PERSON_ID === playerID) {
            let newStats = p.STATS.includes(stat)
              ? p.STATS.filter(s => s !== stat)  // Remove stat
              : [...p.STATS, stat];              // Add stat
            return { ...p, STATS: newStats };
          }
          return p;
        });
    
        // Check if player is already being tracked, if not, add them
        const isPlayerTracked = updatedPlayers.some(p => p.PERSON_ID === playerID);
        if (!isPlayerTracked) {
          updatedPlayers = [
            ...updatedPlayers,
            {
              "PERSON_ID": playerID,
              "PLAYER_LAST_NAME": player.PLAYER_LAST_NAME,
              "PLAYER_FIRST_NAME": player.PLAYER_FIRST_NAME,
              "TEAM_ID": player.TEAM_ID,
              "STATS": [stat]
            }
          ];
        }
    
        return updatedPlayers;
      });
    };

    return (
        <View style={{height: '100%'}}>
            {/*Header*/}
            <View style={[styles.headerContainer, { backgroundColor: teamColor }]}>
                <Image
                    source={{
                        uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/'+player.PERSON_ID+'.png'
                    }}
                    style={styles.image}
                />
                <Image
                  source={teamLogos[player.TEAM_ID]}
                  style={styles.logo}
                />
                <View style={styles.textContainer}>
                    <Text 
                      style={styles.headerText}
                      numberOfLines={1}
                      ellipsizeMode='tail'
                    >{player.PLAYER_FIRST_NAME}</Text>
                    <Text 
                      style={styles.headerText}
                      numberOfLines={1}
                      ellipsizeMode='tail'
                    >{player.PLAYER_LAST_NAME}</Text>
                    <Text style={styles.headerText}>#{player.JERSEY_NUMBER}</Text>
                </View>
            </View>

            <View>
              <Text>

              </Text>
            </View>
  
            {/*Stat Body*/}
            <View style={styles.statBody}>
                <Text style={styles.statTitle}>
                    STATS
                </Text>

                <View style={styles.line}/>
                {/*Stat Container*/}
                <View style={styles.statContainer}>
                    {/*Text Container*/}
                    <View style={styles.statItemContainer}>
                    <Text style={styles.statText}>Points</Text>
                    </View>
                    {/*Switch Container*/}
                    <View style={styles.statItemContainer}>
                      <Switch
                        value={trackedPlayers.some(p => p.PERSON_ID === player.PERSON_ID && p.STATS.includes("PTS"))}
                        onValueChange={newValue => toggleStat(player.PERSON_ID, "PTS")}
                      />

                    </View>
                </View>
    
                {/*Stat Container*/}
                <View style={styles.statContainer}>
                    {/*Text Container*/}
                    <View style={styles.statItemContainer}>
                    <Text style={styles.statText}>Rebounds</Text>
                    </View>
                    {/*Switch Container*/}
                    <View style={styles.statItemContainer}>
                    <Switch
                      value={trackedPlayers.some(p => p.PERSON_ID === player.PERSON_ID && p.STATS.includes("REB"))}
                      onValueChange={newValue => toggleStat(player.PERSON_ID, "REB")}
                    />
                    </View>
                </View>
        
                {/*Stat Container*/}
                <View style={styles.statContainer}>
                    {/*Text Container*/}
                    <View style={styles.statItemContainer}>
                    <Text style={styles.statText}>Asissts</Text>
                    </View>
                    {/*Switch Container*/}
                    <View style={styles.statItemContainer}>
                    <Switch
                      value={trackedPlayers.some(p => p.PERSON_ID === player.PERSON_ID && p.STATS.includes("AST"))}
                      onValueChange={newValue => toggleStat(player.PERSON_ID, "AST")}
                    />
                    </View>
                </View>
        
                {/*Stat Container*/}
                <View style={styles.statContainer}>
                    {/*Text Container*/}
                    <View style={styles.statItemContainer}>
                    <Text style={styles.statText}>3s Made</Text>
                    </View>
                    {/*Switch Container*/}
                    <View style={styles.statItemContainer}>
                    <Switch
                      value={trackedPlayers.some(p => p.PERSON_ID === player.PERSON_ID && p.STATS.includes("3PM"))}
                      onValueChange={newValue => toggleStat(player.PERSON_ID, "3PM")}
                    />
                    </View>
                </View>
    
                {/*Stat Container*/}
                <View style={styles.statContainer}>
                    {/*Text Container*/}
                    <View style={styles.statItemContainer}>
                    <Text style={styles.statText}>Blocks</Text>
                    </View>
                    {/*Switch Container*/}
                    <View style={styles.statItemContainer}>
                    <Switch
                      value={trackedPlayers.some(p => p.PERSON_ID === player.PERSON_ID && p.STATS.includes("BLK"))}
                      onValueChange={newValue => toggleStat(player.PERSON_ID, "BLK")}
                    />
                    </View>
                </View>
    
                {/*Stat Container*/}
                <View style={styles.statContainer}>
                    {/*Text Container*/}
                    <View style={styles.statItemContainer}>
                    <Text style={styles.statText}>Steals</Text>
                    </View>
                    {/*Switch Container*/}
                    <View style={styles.statItemContainer}>
                    <Switch
                      value={trackedPlayers.some(p => p.PERSON_ID === player.PERSON_ID && p.STATS.includes("STL"))}
                      onValueChange={newValue => toggleStat(player.PERSON_ID, "STL")}
                    />
                    </View>
                </View>
            </View>
        </View>
      
    );
}

const styles = StyleSheet.create({
    headerContainer: {
      height: '20%', // Set the height to the value you want
      overflow: 'hidden',    // This hides the part of the image outside the container
      //backgroundColor
    },
    image: {
      width: '50%',
      height: '90%',
      //resizeMode: 'cover',
      position: 'absolute',
      //top: 5,               // Align the top of the image with the container
      bottom: 0,
      zIndex: 1
    },
    logo : {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 0,
      opacity: 0.15
    },
    textContainer: {
      width: '50%',
      position: 'absolute',
      zIndex: 2,
      right: 0,
      height: '100%',
      marginTop: 15,
      marginRight: 10
    },
    headerText: {
      color: 'white', 
      fontSize: 40,
      textAlign: 'left',
    },
    statBody: {
      alignItems: 'center',
    },
    statTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 5
    },
    line: {
      borderWidth: 0.5,
      height: 1,
      width: '75%'
    },
    statContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: 10,
      width: '85%',
    },
    statItemContainer: {
      width: '50%',
      alignItems: 'center',
    },
    statText: {
      fontSize: 24
    },
    test: {
      borderWidth: 1,
    }
  });


export default PlayerModal;