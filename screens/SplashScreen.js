import React from 'react';
import { View, StyleSheet, Text, Dimensions, ActivityIndicator } from 'react-native';

const SplashScreen = ({navigation}) => {

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff', // You can change this to your desired background color
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    }
});

export default SplashScreen;
