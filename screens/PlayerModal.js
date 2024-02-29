import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, Switch} from 'react-native';
import {teamColors, teamLogos} from '../stylesheets/styles';
import axios from 'axios';

const PlayerModal = ({route}) => {
    const [trackingInfo, setTrackinfInfo] = useState([])

    useEffect(() => {
      const getTracking = async () => {
        try {
          const tracking = await axios.get("http://192.168.1.13:3000/user/65deaba5946c295b3481d0c3")
          const player = tracking.data.find(p => p.player == route.params.player.PERSON_ID)
          setTrackinfInfo(player)
        } catch (error) {
          console.error("Error fetching tracking", error)
        }
      }
      getTracking()
    }, []);

    const updateTrackingDatabase = async (updatedTrackingInfo) => {
      try {
        const response = await axios.put("http://192.168.1.13:3000/user/tracking", updatedTrackingInfo);
        console.log(response.data);
      } catch (error) {
        console.error("Error updating tracking info", error);
      }
    };

    const toggleStat = (statValue, stat) => {
      const updatedTrackingInfo = {
        ...trackingInfo,
        [stat]: !statValue,
      };
      setTrackinfInfo(updatedTrackingInfo)
      updateTrackingDatabase(updatedTrackingInfo)
      return !statValue
    }

    const player = route.params.player

    //console.log(player)
    //console.log(trackingInfo)

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