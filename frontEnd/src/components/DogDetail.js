import React from 'react';
import { View, Text, Image, URI } from 'react-native';
import DogIndex from './DogIndex';


const DogDetail = ({ dog }) => {
	const { eachDogStyle, eachDogPictureContainerStyle, eachDogPictureStyle, eachDogNameContainerStyle, eachDogNameStyle} = styles;
	return (
		<View style={eachDogStyle}>
        	<View style={eachDogPictureContainerStyle}><Image source={{ uri: dog.imageURL }} style={eachDogPictureStyle}/></View>
        	<View style={eachDogNameContainerStyle}>
          		<Text style={eachDogNameStyle}>{dog.name}</Text>      
        	</View>
      	</View>
	);	
};

const styles = {
   	eachDogStyle: { 
      alignItems: 'flex-start',
      flexDirection:'row'
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
      fontSize: 20
    }
  };

export default DogDetail;