import React, { Component } from 'react';
import { Text, View, Picker, Button, TextInput, AsyncStorage, TouchableOpacity, Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';
import CarouselExample from './ShowCarousel';
import axios from 'axios';
import faves from './faves.jpg';
import { storeToken, getToken } from '../../token';

ACCESS_TOKEN = 'access_token';
import logo from './logo.png';

class Form extends Component {
  static onEnter = () => {
    Actions.refresh()
  }


  constructor(props){
    super(props);
    this.state = {
      size: 'L',
      age: 'Young',
      sex: 'F',
      results: [],
      location: '94131',
      access_token: ''
    };
    this.dogSearcher = this.dogSearcher.bind(this);
    getToken().then((result) =>
      this.state.access_token = result
    )
  };

  dogSearcher = () => {
    axios.get('https://puppr-app.herokuapp.com/petfinder/index', {
      params: {
        age: this.state.age,
        size: this.state.size,
        sex: this.state.sex,
        location: this.state.location,
        access_token: this.state.access_token
      }
    })
    .then( (response) => {
      this.setState({
        results: response.data,
        access_token: response.config.params.access_token
      });
      Actions.flip({dogs: this.state.results, token: this.state.access_token});
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
              <Image style={styles.imageStyle} source={logo} />

          <Text style={styles.locationTitle}>Find Nearest Shelter</Text>

          <TextInput
            textAlign="center"
            selectionColor="#B8B8C4"
            itemColor="#9E59D3"
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

      <View style={styles.buttonStyle}>
        <Button title="Submit" color="#74F363" onPress={() => this.dogSearcher()}/>
      </View>

      <View style={styles.buttonStyle}>
        <Button title="View Favorites" color="#74F363" onPress={() => Actions.favorites()}/>
      </View>


  </View>
    );
  };
};

const styles = {
  locationContainer: {
    marginTop: 100,
    alignItems: 'center'
  },
  locationTitle: {
    fontSize: 18,
    color: '#BBB193'
  },
  formContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  imageStyle: {
    width: '100%',
    height: 150,
    marginBottom: 10
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: '#F3E263',
    marginLeft: '20%',
    marginRight: '20%',
    borderRadius: 5,
    marginTop: '2%'
  }
};

export default Form;
