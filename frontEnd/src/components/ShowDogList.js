import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import ShowDogDetail from './ShowDogDetail';

class ShowDogList extends Component {
  state = { dogs: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ dogs: response.data }));
  }

  renderDogs() {
    return this.state.dogs.map(dog =>
      <ShowDogDetail key={dog.title} dog={dog} />
    );
  }

  render() {
    return (
      <View style={styles.background}>
        {this.renderDogs()}
      </View>
    );
  }
}



export default ShowDogList;
