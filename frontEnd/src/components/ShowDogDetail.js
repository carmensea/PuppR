import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import Button from './ShowButton';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import pawHeart from './heart-paw.png';
import faves from './faves.jpg';
import searchPaw from './search-paw.png';

const ShowDogDetail = ({dog}) => {
  const { name, sex, description, age, size, photo, shelter_id } = dog

  const likeDog = () => {
    axios.post('http://localhost:3000/dogs', dog)
  }

  return (
    <View style={{flex: 1}, {marginTop: 30}}>
        <View style={styles.pictureStyle}>
            <Image style={styles.pictureSizeStyle} source={{uri: photo}}/>
          </View>

        <View style={styles.headContentStyle}>
          <View style={styles.nameStyleContainer}>
            <Text style={styles.nameTextStyle}>{name}</Text>

            <TouchableOpacity onPress={likeDog}>
              <Image style={{width: 50, height: 50}} source={pawHeart} />
            </TouchableOpacity>
          </View>
        </View>

    <View>

    </View>
    </View>
  );
};

const styles = {
  headContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  nameStyleContainer: {
    flexDirection: 'column',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameTextStyle: {
    fontSize: 32,
    fontWeight: '500',
    color: '#BBB193',
    textAlign: 'center'
  },
  pictureStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pictureSizeStyle: {
    width: 365,
    height: 365,
    resizeMode: 'contain'
  }
};

export default ShowDogDetail;
