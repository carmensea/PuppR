import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import DogDetail from './DogDetail';
import axios from 'axios';
import searchPaw from './search-paw.png';
import { Actions } from 'react-native-router-flux';
import yourPupprs from './your-pupprs.png';

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
        <View style={styles.backgroundView}>
          <ScrollView>
            <View style={styles.headerStyle}>
              <Image source={yourPupprs} />
              <View style={styles.buttonStyle}>
                <Button title="Back To Search" color="#57E9D7" onPress={() => Actions.form()}/>
              </View>
            </View>
            <View>
            </View>
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
      color: '#BCF363',
      textAlign: 'center',
      height: 80,
      paddingTop: 20,
      fontWeight: '500'
    },
    backgroundView: {
      backgroundColor: 'white',
      paddingTop: 35
    },
    headerStyle: {
      borderBottomWidth: 2,
      borderBottomColor: '#63F39A',
      marginBottom: 10,
      flex: 1
    },
    buttonStyle: {
      borderWidth: 2,
      borderColor: '#74F363',
      marginLeft: 90,
      marginRight: 90,
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10
  }
  };

export default DogIndex;
