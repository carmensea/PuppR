import React from 'react';
import { View } from 'react-native';

const ShowCard = (props) => {
  return (
    <View>
      {props.children}
    </View>
  );
};

export default ShowCard;
