import React from 'react';
import { View, Text, Image, URI, Button } from 'react-native';
import DogIndex from './DogIndex';
import { Actions } from 'react-native-router-flux';


const DogDetail = ({ dog }) => {
	const { eachDogStyle, eachDogPictureContainerStyle, eachDogPictureStyle, eachDogNameContainerStyle, eachDogNameStyle} = styles;
	const { name, sex, description, age, size, photo, shelter_id } = dog
  return (
		<View style={eachDogStyle}>
        	<View style={eachDogPictureContainerStyle}><Image source={{ uri: photo }} style={eachDogPictureStyle}/></View>
          <View style={eachDogNameContainerStyle}>
          		<Button color={'#52CEBF'} style={eachDogNameStyle} title={name} onPress={() => Actions.show(dog)}/>
        	    <Text style={eachDogNameStyle}>{sex}</Text>
              <Text style={eachDogNameStyle}>{age}</Text>
          </View>
    </View>
	);
};

const styles = {
   	eachDogStyle: {
      alignItems: 'flex-start',
      flexDirection:'row',
      borderBottomWidth: 1,
      borderBottomColor: '#B8B8C4',
      marginTop: 8
   	},
    eachDogPictureContainerStyle: {
      marginLeft: 10,
      marginBottom: 10,
      width: 150,
      height: 150
    },
    eachDogPictureStyle: {
      height: 150,
      width: 150
    },
    eachDogNameContainerStyle: {
      height: 150,
      flex: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    eachDogNameStyle: {
      paddingLeft: 10,
      fontSize: 20,
      color: '#BBB193',
    }
  };

export default DogDetail;