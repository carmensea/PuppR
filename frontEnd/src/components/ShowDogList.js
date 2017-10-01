import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import ShowDogDetail from './ShowDogDetail';

class ShowDogList extends Component {
  state = { dogs: [] };

  componentWillMount() {
    // get an array of 25 dogs
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ dogs: response.data }));
  }

  renderDogs() {
    // change title to dog_id
    return this.state.dogs.map(dog =>
      <ShowDogDetail key={dog.title} dog={dog} />
    );
  }

  render() {
    return (
      <View>
        {this.renderDogs()}
      </View>
    );
  }
}

export default ShowDogList;
