import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

const DogIndex = () => {
  
  //const { pageHeadlineStyle } = styles;

  const dog1 = 
    {
      name: 'Otis',
      imageURL: './dog1.jpeg'
    }
    
  const dog2 = 
    {
      name: 'Fido',
      imageURL: './dog2.jpeg'
    }
    
  const dog3 =  
    {
      name: 'Fluffy',
      imageURL: './dog3.jpeg'
    }
      

  const styles = {
    eachDogStyle: { 
      alignItems: 'flex-start',
      flexDirection:'row'
    },
    eachDogPictureStyle: { 
      marginLeft: 10,
      marginBottom: 10
    },

    pageHeadlineStyle: { 
      textAlign: 'center',
      //justifyContent: 'center',
      fontSize: 30,
      alignItems: 'center',
      height: 100,
      paddingTop: 20,
      elevation: 2,
      position: 'relative'
    },
    eachDogNameStyle: {
      paddingLeft: 10,
      fontSize: 20
    },
    eachDogNameContainer: {
      flex: 15,
      flexDirection: 'column',
      justifyContent: 'center',
      alignText: 'center' 
    }
  };
  
  return (
    <View>
      <Text style={styles.pageHeadlineStyle}>Paw-tential Soulmates</Text>
      <View style={styles.eachDogStyle}>
        <View style={styles.eachDogPictureStyle}><Image source={require('./dog1.jpeg')} /></View>
        <View style={styles.eachDogNameContainer}>
          <Text style={styles.eachDogNameStyle}>{dog1.name}</Text>      
        </View>
      </View>
      <View style={styles.eachDogStyle}>
        <View style={styles.eachDogPictureStyle}><Image source={require('./dog2.jpeg')} /></View>
        <View style={styles.eachDogNameContainer}>
          <Text style={styles.eachDogNameStyle}>{dog2.name}</Text>      
        </View>
      </View>
      <View style={styles.eachDogStyle}>
        <View style={styles.eachDogPictureStyle}><Image source={require('./dog3.jpeg')} /></View>
        <View style={styles.eachDogNameContainer}>
          <Text style={styles.eachDogNameStyle}>{dog3.name}</Text>      
        </View>
      </View>
    </View>
  );   

  


};

export default DogIndex;