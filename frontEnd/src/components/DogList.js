import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class DogList extends Component {
  componentWillMount(){
    axios.get('http://localhost:3000/petfinder/index')
  }
  render(){
    return (
      <View>
        <Text>Dog List!</Text>
      </View>
    );
  }
}

export default DogList;
