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
// import Footer from './Footer';

const ShowDogDetail = ({dog}) => {
  const { name, photo } = dog

  const likeDog = () => {
    axios.post('http://localhost:3000/dogs', dog)
  }

  return (
    <ShowCard style={{flex: 1}}>
      <ShowCardSection>
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
      </ShowCardSection>

    <View>
      <View style={styles.iconStyle}>
        <TouchableOpacity onPress={() => Actions.favorites()}>
          <Image style={{width: 50, height: 50}} source={faves} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.form()}>
          <Image style={{width: 50, height: 50}} source={searchPaw} />
        </TouchableOpacity>
      </View>

      <View style={styles.iconStyle}>
        <Text style={{color: '#838887'}}>
          See Faves
        </Text>
        <Text style={{color: '#838887'}}>
          Search
        </Text>
      </View>
    </View>

    </ShowCard>
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
    alignItems: 'center',
    paddingTop: 25
  },
  pictureSizeStyle: {
    width: 365,
    height: 365,
    resizeMode: 'contain'
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },

};

export default ShowDogDetail;
