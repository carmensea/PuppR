import React from 'react';
import { View, Text, Image } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';

const ShowDogDetail = ({dog}) => {
  const { title, artist, thumbnail_image } = dog
  return (
    <ShowCard>
      <ShowCardSection>
        <View>
          {/*<Image
            source={{ uri: thumbnail_image }}
          />*/}
        </View>
        <View style={styles.headContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
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
