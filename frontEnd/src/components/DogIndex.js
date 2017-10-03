import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
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
    return this.state.dogs.map((dog, i) => 
      <DogDetail key={i} dog={dog} />
    );
  } 

  render() {
    return (
        <View>
          <Text style={styles.pageHeadlineStyle}>Paw-tential Soulmates</Text>
          <ScrollView>
          <View>{this.renderDogs()}</View>
          </ScrollView>
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

// renderDogs(){
//     this.state.dogs.map((dog) => {
//       return <DogDetail key={dog.id} dog={dog} />
//     })
//   }


