import React, { Component } from 'react';
import { Text, View, Picker, Button, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

//npm install --save react-native-material-dropdown


class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      size: 'S',
      age: 'Young',
      gender: 'F',
      location: ''
    };
  };

  dogSearcher = () => {
    axios.get('http://localhost:3000/petfinder/index')
    .then(
      (console.log("the"))
    )
  }

render(){
  let sizeData = [{
    value: 'S',
  }, {
    value: 'M',
  }, {
    value: 'L'
  }];

  let ageData = [{
    value: 'Baby',
  }, {
    value: 'Young',
  }, {
    value: 'Adult'
  }, {
    value: 'Senior'
  }];

  let sexData = [{
    value: 'F',
  }, {
    value: 'M'
  }]



  return (
    <View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>Find Nearest Shelter</Text>
        <TextInput
          placeholder="Enter Your Zipcode"
          onChangeText={(location) => this.setState({location})}
        />
      </View>

    <Dropdown
    label='Select Size'
    data={sizeData}
    onChangeText={(value, index, data) => this.setState({size:value})}
    />

    <Dropdown
    label='Select Age'
    data={ageData}
    onChangeText={(value, index, data) => this.setState({age:value})}
    />

    <Dropdown
    label='Select Sex'
    data={sexData}
    onChangeText={(value, index, data) => this.setState({gender:value})}
    />

    <Button title="Submit" onPress={() => Actions.flip()}/>

    </View>
    );
};

};

const styles = {
  selectionContainer: {

  },

  locationContainer: {
    marginTop: 100,
    alignItems: 'center'
  },
  locationTitle: {
    fontSize: 18
  }

};

export default Form;