import React from 'react';
import { View, Text, Image } from 'react-native';

const DogContactInfo = () => {
  const shelter = {name: "Guardian Angels International Rescue", address: "Sunnyvale, CA 94089 US", phone: "123-456-7890" };
  return (
        <View style={styles.shelterInfoContainer}>
          <Text>Shelter Info: {shelter.name}{"\n"}
          Address: {shelter.address}{"\n"}
          Phone: {shelter.phone}</Text>
        </View>   
  	);
};

const styles = {
  shelterInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  
  }
};

export default DogContactInfo;




