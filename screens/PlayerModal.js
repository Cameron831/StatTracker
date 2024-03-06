import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, Switch} from 'react-native';
import {teamColors, teamLogos} from '../stylesheets/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const playersData = require('../players.json');
const players = playersData.players

const PlayerModal = ({route, navigation}) => {
    const [trackingInfo, setTrackingInfo] = useState({})
    const playerId = route.params.playerId
    const player = players.find(p => p.PERSON_ID == playerId)

    useEffect(() => {

      const unsubscribeBlur = navigation.addListener('blur', () => {
        updateTrackingDatabase(trackingInfo)
      });

      const unsubscribeFocus = navigation.addListener('focus', () => {
        getTracking()
      })
      
      return () => {
        unsubscribeBlur();
        unsubscribeFocus();
      };
    }, [navigation, trackingInfo]);

    const getTracking = async () => {
      try {
        const token = await AsyncStorage.getItem('LOGIN_TOKEN');
        const tracking = await axios.get(`http://192.168.1.13:3000/user/tracking/${token}`)
        let foundPlayer = tracking.data.find(p => p.player == playerId);
        if(!foundPlayer) {
          const newPlayerData = {
            player: playerId,
            PTS: false,
            REB: false,
            AST: false,
            TPM: false,
            BLK: false,
            STL: false,
            user: token
          };
          const response = await axios.post("http://192.168.1.13:3000/user/tracking", newPlayerData);
          foundPlayer = response.data; 
        }
        setTrackingInfo(foundPlayer);
      } catch (error) {
        console.error("Error fetching tracking", error);
      }
    };
    

    const updateTrackingDatabase = async (updatedTrackingInfo) => {
      try {
        const response = await axios.put("http://192.168.1.13:3000/user/tracking", updatedTrackingInfo);
      } catch (error) {
        console.error("Error updating tracking info", error);
      }
    };

    const toggleStat = (statValue, stat) => {
      const updatedTrackingInfo = {
        ...trackingInfo,
        [stat]: !statValue,
      };
      setTrackingInfo(updatedTrackingInfo)
    }

    const teamColor = teamColors[player.TEAM_ABBREVIATION]

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
                        value={trackingInfo.PTS}
                        onValueChange={newValue => toggleStat(trackingInfo.PTS, "PTS")}
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
                      value={trackingInfo.REB}
                      onValueChange={newValue => toggleStat(trackingInfo.REB, "REB")}
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
                      value={trackingInfo.AST}
                      onValueChange={newValue => toggleStat(trackingInfo.AST, "AST")}
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
                      value={trackingInfo.TPM}
                      onValueChange={newValue => toggleStat(trackingInfo.TPM, "TPM")}
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
                      value={trackingInfo.BLK}
                      onValueChange={newValue => toggleStat(trackingInfo.BLK, "BLK")}
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
                      value={trackingInfo.STL}
                      onValueChange={newValue => toggleStat(trackingInfo.STL, "STL")}
                    />
                    </View>
                </View>
            </View>
        </View>
      
    );
}

const styles = StyleSheet.create({
    headerContainer: {
      height: '25%',
      overflow: 'hidden',    
    },
    image: {
      width: '55%',
      height: '90%',
      position: 'absolute',
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
      width: '45%',
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
      height: 1,
      backgroundColor: 'lightgray',
      marginVertical: 4,
      width: '90%'
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