import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const TrackerView = () => {
  const [text, setText] = useState('');

  return (
    <View>
        <Text>Name: Value</Text>
        <Text>Name: Value</Text>
        <Text>Name: Value</Text>
    </View>
  );
};

export default TrackerView;