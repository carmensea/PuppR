import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import DogDetail from './DogDetail';
import axios from 'axios';

class DogIndex extends Component {

  state = {
          dogs: []
  };

   componentWillMount() {
     axios.get('http://localhost:3000/dogs')
     .then(response => this.setState({ dogs: response.data }));
   }

  renderDogs() {
    console.log(this.state.dogs);
    return this.state.dogs.map((dog, i) => 
      <DogDetail key={i} dog={dog} />
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.pageHeadlineStyle}>Paw-tential Soulmates</Text>
        <View>{this.renderDogs()}</View>
      </View>
    );
  }
};

const styles = {
    pageHeadlineStyle: {
      textAlign: 'center',
      fontSize: 30,
      alignItems: 'center',
      height: 100,
      paddingTop: 20,
      elevation: 2,
      position: 'relative'
    },
    eachDogNameStyle: {
      paddingLeft: 10,
      fontSize: 20
    },
    eachDogNameContainer: {
      flex: 15,
      flexDirection: 'column',
      justifyContent: 'center',
      alignText: 'center'
    }
  };


export default DogIndex;
