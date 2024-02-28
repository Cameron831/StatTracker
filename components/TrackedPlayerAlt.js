import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { common } from '../stylesheets/styles';

const playersData = require('../players.json');
//const players = playersData.players

const TrackedPlayer = (props) => {
    const trackedPlayer = props.item
    console.log(trackedPlayer)

    const player = playersData.players.find(p => p.PERSON_ID == trackedPlayer.player)
    //console.log(player)

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.player}>
                <Image
                        source={{
                            uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/'+player.PERSON_ID+'.png'
                        }}
                        style={styles.img}
                    />
                    <Text style={styles.name}>{player.PLAYER_FIRST_NAME} {player.PLAYER_LAST_NAME}</Text>
                </View>
                 
                <View style={styles.timeLeft}> 
                    <Text style={styles.time}>Q4: 11:36</Text>
                </View>
                
            </View>

            <View style={styles.body}>
                {trackedPlayer.PTS && 
                    <View style={styles.statContainer}>
                        <Text style={styles.stat}>PTS: {player.PTS}</Text>
                    </View>
                }
                

                {trackedPlayer.REB &&
                    <View style={styles.statContainer}>
                        <Text style={styles.stat}>REB: {player.PTS}</Text>
                    </View>
                }
                
                {trackedPlayer.AST &&
                    <View style={styles.statContainer}>
                        <Text style={styles.stat}>AST: {player.PTS}</Text>
                    </View>
                }

                {trackedPlayer.TPM && 
                    <View style={styles.statContainer}>
                        <Text style={styles.stat}>3PM: {player.PTS}</Text>
                    </View> 
                }
                
                {trackedPlayer.BLK &&
                    <View style={styles.statContainer}>
                        <Text style={styles.stat}>BLK: {player.PTS}</Text>
                    </View>
                }

                {trackedPlayer.STL && 
                    <View style={styles.statContainer}>
                        <Text style={styles.stat}>STL: {player.REB}</Text>
                    </View>
                }
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        //justifyContent: 'flex-start',
        //width: '90%',
        borderWidth: 1,
        borderRadius: 20,
        margin: '2.5%',
        backgroundColor: 'white',
        overflow: 'hidden'
        //maxHeight: '5%'
        //alignItems: 'center'
        //height: '35%'
    },
    titleContainer: {
        flexDirection: 'row',
        //height: '30%',
        borderBottomWidth: 1,
        backgroundColor: '#CEDEF2',
        //borderWidth: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }, 
    player: {
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        //borderWidth: 1
    },
    timeLeft: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '40%',
        //height: '35%',
        //borderWidth: 1
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        //borderWidth: 1
    },
    statContainer: {
        flexDirection: 'row',
        margin: '1.5%',
        justifyContent: 'center',
        width: '30%',
        //borderWidth: 1
    },
    statName: {
        fontSize: 18,
        marginLeft: '8%'
        //borderWidth: 1
    },
    stat: {
        fontSize: 18,
        //borderWidth: 1
    },
    name: {
        fontSize: 24,
        margin: '3%'
    },
    img: {
        height: 50,
        width: 50,
        //borderRadius: 30,
        //backgroundColor: 'grey',
        margin: '5%'
    },
    time: {
        fontSize: 14,
        margin: '5%'
    }
});


export default TrackedPlayer;