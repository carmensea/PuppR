import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import Button from './ShowButton';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import pawHeart from './heart-paw.png';
import faves from './faves.jpg';
import searchPaw from './search-paw.png';
import { storeToken, getToken } from '../../token';

class ShowDogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.dog.photo,
      name:  this.props.dog.name,
      token: this.props.token
    };
    this.likeDog = this.likeDog.bind(this);
  };
  likeDog = () => {
    axios.post('https://puppr-app.herokuapp.com/dogs', {
        dog: this.props.dog,
        access_token: this.state.token
    })
  }

render() {
  return (
    <View style={{flex: 1}, {marginTop: 30}}>
        <View style={styles.pictureStyle}>
            <Image style={styles.pictureSizeStyle} source={{uri: this.state.photo}}/>
          </View>

        <View style={styles.headContentStyle}>
          <View style={styles.nameStyleContainer}>
            <Text style={styles.nameTextStyle}>{this.state.name}</Text>

            <TouchableOpacity onPress={this.likeDog}>
              <Image style={{width: 50, height: 50}} source={pawHeart} />
            </TouchableOpacity>
          </View>
        </View>

    <View>

    </View>
    </View>
  );
  }
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
