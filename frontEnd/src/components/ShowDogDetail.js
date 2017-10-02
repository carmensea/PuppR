import React from 'react';
import { View, Text, Image } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import Button from './ShowButton';
import axios from 'axios';

const ShowDogDetail = ({dog}) => {
  const { name, sex, description, age, size, photo, shelter_id } = dog

  const likeDog = () => {
    axios.post('http://localhost:3000/dogs', dog)
  }

  const noThanks = () => {
    axios.delete('', dog)
  }

  return (
    <ShowCard>
      <ShowCardSection>
        <View style={styles.headContentStyle}>
          <Text>{name}</Text>
          <Text>{age}</Text>
          <Text>{sex}</Text>
          <Text>{description}</Text>
          <Text>{size}</Text>
          <Button onPress={noThanks} />
          <Button onPress={likeDog} />
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
