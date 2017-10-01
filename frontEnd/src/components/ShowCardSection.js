import React from 'react';
import { View } from 'react-native';

const ShowCardSection = (props) => {
  return (
    <View>
      {props.children}
    </View>
  );
}

// may not add styles here
// const style = {
//   containerStyle: {
//     add some style maybe:
      //  maybe flexDirection
      //  justifyContent
//
//   }
// }

export default ShowCardSection;
