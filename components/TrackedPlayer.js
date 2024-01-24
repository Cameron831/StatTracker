import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { common } from '../stylesheets/styles';

const TrackedPlayer = (props) => {
    const player = props.player

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image
                    source={{
                        uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/'+player.PERSON_ID+'.png'
                    }}
                    style={styles.img}
                />
                <Text style={styles.name}>P. {player.PLAYER_LAST_NAME}</Text>
            </View>

            <View style={styles.statContainer}>
                <Text style={styles.statName}>Points:</Text>
                <Text style={styles.stat}>{player.PTS}</Text>
            </View>

            <View style={styles.statContainer}>
                <Text style={styles.statName}>Rebounds:</Text>
                <Text style={styles.stat}>{player.REB}</Text>
            </View>
            
            <View style={styles.statContainer}>
                <Text style={styles.statName}>Assists:</Text>
                <Text style={styles.stat}>{player.REB}</Text>
            </View>

            <View style={styles.statContainer}>
                <Text style={styles.statName}>3PM:</Text>
                <Text style={styles.stat}>{player.REB}</Text>
            </View>
            
            <View style={styles.statContainer}>
                <Text style={styles.statName}>Blocks:</Text>
                <Text style={styles.stat}>{player.REB}</Text>
            </View>
            
            <View style={styles.statContainer}>
                <Text style={styles.statName}>Steals:</Text>
                <Text style={styles.stat}>{player.REB}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '45%',
        borderWidth: 1,
        borderRadius: 20,
        margin: '2.5%',
        alignItems: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    statContainer: {
        flexDirection: 'row',
        marginBottom: '3%'
    },
    statName: {
        marginLeft: '10%',
        fontSize: 18,
        width: '50%',
        //borderWidth: 1
    },
    stat: {
        marginLeft: '10%',
        fontSize: 18,
        width: '20%',
        //borderWidth: 1
    },
    name: {
        fontSize: 20,
        margin: '5%'
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'grey',
        margin: '5%'
    },
});


export default TrackedPlayer;