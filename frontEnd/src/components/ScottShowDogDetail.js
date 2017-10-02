import React from 'react';
import { View, Text, Image } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import DogContactInfo from './DogContactInfo';

const ScottShowDogDetail = () => {
  const dog = { name: 'Otis', imageURL: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/39348068/5/?bust=1505079564&amp;width=800' }
  const { headContentStyle, pageHeadlineStyle, dogPictureContainer, dogPicture} = styles
  return (
    <ShowCard>
      <ShowCardSection>
        <View style={headContentStyle}>
          <Text style={pageHeadlineStyle}>{dog.name}</Text>
        </View>
        <View style={dogPictureContainer}>
          <Image source={{ uri: dog.imageURL }} style={dogPicture}/>
        </View>
      </ShowCardSection>
      <DogContactInfo/>
    </ShowCard>
  );
};

const styles = {
  headContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  pageHeadlineStyle: { 
      textAlign: 'center',
      fontSize: 30,
      alignItems: 'center',
      height: 100,
      paddingTop: 20,
      elevation: 2,
      position: 'relative'
  },
  dogPictureContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  dogPicture: {
      height: 300,
      width: 300
  }
};

export default ScottShowDogDetail;