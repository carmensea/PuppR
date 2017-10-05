import React from 'react';
import { View } from 'react-native';

const ShowCardSection = (props) => {
  return (
    <View>
      {props.children}
    </View>
  );
}

export default ShowCardSection;
