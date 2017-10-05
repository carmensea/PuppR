import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const Footer = () => {
  return(
    <View style={{flex: 1, backgroundColor: 'blue', position: 'absolute', bottom: 0, left: 100}}>
      <View style={
        {height:10,
        position: 'absolute',
        bottom: 0
        }
      }
      marginColor = 'red'
      position = 'absolute'
      bottom = {0} >
        <Text>My fixed footer</Text>
      </View>
    </View>
  );
};

export default Footer;