import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import DogDetail from './DogDetail';
import axios from 'axios';
import searchPaw from './search-paw.png';
import { Actions } from 'react-native-router-flux';

class DogIndex extends Component {

  state = {
    dogs: []
  };

  componentWillMount() {
     axios.get('http://localhost:3000/dogs')
     .then(response => this.setState({ dogs: response.data }));
  }

  renderDogs() {
    return this.state.dogs.map((dog, i) =>
      <DogDetail key={i} dog={dog} />
    );
  }

  render() {
    return (
        <View>
        <TouchableOpacity onPress={() => Actions.form()}>
          <Image style={{width: 50, height: 50}} source={searchPaw} />
        </TouchableOpacity>
          <ScrollView>
            <Text style={styles.headlineContainerStyle}>Paw-tential Soulmates</Text>
            <View>
              {this.renderDogs()}
            </View>
          </ScrollView>
        </View>

    );
  }
};

const styles = {
    headlineContainerStyle: {
      fontSize: 35,
      color: '#FFFFFF',
      textAlign: 'center',
      height: 80,
      paddingTop: 20,
      fontWeight: '300',
      backgroundColor: '#DFC8C3'
    }
  };

export default DogIndex;
