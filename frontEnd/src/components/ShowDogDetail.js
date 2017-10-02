import React from 'react';
import { View, Text, Image } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import Button from './ShowButton';

const ShowDogDetail = ({dog}) => {
  const { name, breed } = dog

  const likeDog = () => {
    axios.post('', dog)
  }

  const noThanks = () => {
    axios.delete('', dog)
  }

  return (
    <ShowCard>
      <ShowCardSection>
        <View style={styles.headContentStyle}>
          <Button onPress={likeDog} />
          <Text>{name}</Text>
          <Text>{breed}</Text>
          <Button onPress={noThanks} />
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
