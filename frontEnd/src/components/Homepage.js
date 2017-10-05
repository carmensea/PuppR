import React, { Component }  from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import logo from './logo.png';

class Homepage extends Component {
render(){
  return (
    <View style={styles.locationContainer}>
      <Image style={styles.imageStyle} source={logo} />

      <View style={styles.buttonContainer}>
      <View style={styles.buttonStyle}>
        <Button title=" Login  " color="#74F363" onPress={() => Actions.login()}/>
      </View>

      <View style={styles.buttonStyle}>
        <Button title="Register" color="#74F363" onPress={() => Actions.register()}/>
      </View>
      </View>

    </View>
    );
  }
};


const styles = {
  locationContainer: {
    paddingTop: '40%',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1
  },
  imageStyle: {
    width: 375,
    height: 150,
    marginBottom: 10
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: '#F3E263',
    marginLeft: 90,
    marginRight: 90,
    borderRadius: 5,
    marginTop: 10
  },
  buttonContainer: {
    paddingRight: 50,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

export default Homepage;