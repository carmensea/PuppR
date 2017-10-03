import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import Button from './ShowButton';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import pawHeart from './heart-paw.png';

const ShowDogDetail = ({dog}) => {
  const { name, sex, description, age, size, photo, shelter_id } = dog

  const likeDog = () => {
    axios.post('http://localhost:3000/dogs', dog)
  }

  return (
    <ShowCard>
      <ShowCardSection>
        <View style={styles.headContentStyle}>
          <Text>{name}</Text>
          <Text>{age}</Text>
          <Text>{sex}</Text>
          
          <Text>{size}</Text>
          <Image style={{width: 100, height: 100}} source={{uri: photo}}/>
          <Button onPress={() => Actions.favorites()} />
          <TouchableOpacity onPress={likeDog}>
           <Image style={{width: 50, height: 50}} source={pawHeart} />
          </TouchableOpacity>
        </View>
      </ShowCardSection>
    </ShowCard>
  );
};

const styles = {
  headContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default ShowDogDetail;
//Commented out line 23: <Text>{description}</Text>