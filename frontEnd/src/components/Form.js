import React, { Component } from 'react';
import { Text, View, Picker, Button, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';
import CarouselExample from './ShowCarousel';
import axios from 'axios';

class Form extends Component {
  static onEnter = () => {
    Actions.refresh()
  }


  constructor(props){
    super(props);
    this.state = {
      size: '',
      age: '',
      sex: '',
      results: [],
      location: ''
    };
    this.dogSearcher = this.dogSearcher.bind(this);
  };

  dogSearcher = () => {
    axios.get('http://localhost:3000/petfinder/index', {
      params: {
        age: this.state.age,
        size: this.state.size,
        sex: this.state.sex,
        location: this.state.location
      }
    })
    .then( (response) => {
      this.setState({
        results: response.data
      });
      Actions.flip(dogs=this.state.results);
    })
    .catch(error => console.log(error))
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
  }];



  return (
    <View style={styles.formContainer}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>Find Nearest Shelter</Text>
        <TextInput
          textAlign="center"
          keyboardType="numeric"
          selectionColor="#E9E9EF"
          itemColor="#9e59d3"
          animationDuration={5}
          maxLength={5}
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
    onChangeText={(value, index, data) => this.setState({sex:value})}
    />

    <Button title="Submit" color="#D3598E"onPress={() => this.dogSearcher()}/>
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
    fontSize: 18,
    color: '#8ED359'
  },
  formContainer: {
    padding: 20
  }
};

export default Form;
