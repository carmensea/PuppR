import React from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';


const ShowDogDetail = () => {
    return(
      <View>
         <Button title="View Your Favorite Dogs!" color="#D3598E"onPress={() => Actions.favorites()}/>
      </View>
    );
};

export default ShowDogDetail;