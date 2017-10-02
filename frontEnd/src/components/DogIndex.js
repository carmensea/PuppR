import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import DogDetail from './DogDetail';

class DogIndex extends Component {
  
  state = { 
          dogs: [
                  { name: 'Otis', imageURL: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/39348068/5/?bust=1505079564&amp;width=800' }, 
                  { name: 'Fido', imageURL: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/39075659/1/?bust=1502575441&amp;width=800' }, 
                  { name: 'Fluffy', imageURL: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/39532484/1/?bust=1506808019&amp;width=800' }
                ] 
          };

  // componentWillMount() {
  //   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  //   .then(response => this.setState({ dogs: response.data }));
  // }

  renderDogs() {
    return this.state.dogs.map(dog => 
      <DogDetail key={dog.name} dog={dog} />
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
    }  
  };

export default DogIndex;
