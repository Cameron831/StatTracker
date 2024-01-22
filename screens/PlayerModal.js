import React from 'react';
import { View, Image, StyleSheet, Text, Switch} from 'react-native';
import { common } from '../stylesheets/styles';

const PlayerModal = ({route}) => {
    const {player} = route.params

    return (
        <View style={{height: '100%'}}>
            {/*Header*/}
            <View style={styles.headerContainer}>
                <Image
                    source={{
                        uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/'+player.PERSON_ID+'.png'
                    }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>{player.PLAYER_FIRST_NAME}</Text>
                    <Text style={styles.headerText}>{player.PLAYER_LAST_NAME}</Text>
                    <Text style={styles.headerText}>#{player.JERSEY_NUMBER}</Text>
                </View>
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
                        />
                    </View>
                </View>
            </View>
        </View>
      
    );
}

const styles = StyleSheet.create({
    headerContainer: {
      height: '25%', // Set the height to the value you want
      overflow: 'hidden',    // This hides the part of the image outside the container
      backgroundColor: '#0268d6',
    },
    image: {
      width: '60%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
      top: 5,               // Align the top of the image with the container
    },
    textContainer: {
      width: '50%',
      position: 'absolute',
      right: 0,
      height: '100%',
    },
    headerText: {
      color: 'white', 
      fontSize: 35,
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