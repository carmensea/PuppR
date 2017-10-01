import React, { Component } from 'react';
import { Text, View, Picker, Button, TextInput } from 'react-native';
//import axios!

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

render(){
  return(
    <View>
      <View style={styles.locationContainer}>
        <Text>Find Nearest Shelter</Text>
        <TextInput
          placeholder="Enter Your Zipcode"
          onChangeText={(location) => this.setState({location})}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Picker style={styles.containerStyle}
          selectedValue={this.state.size}
          onValueChange={(itemValue, itemIndex) => this.setState({size:itemValue})}>
          <Picker.Item label="S" value="s" />
          <Picker.Item label="M" value="m" />
          <Picker.Item label="L" value="l" />
        </Picker>
        <Picker style={styles.containerStyle}
          selectedValue={this.state.age}
          onValueChange={(itemValue, itemIndex) => this.setState({age:itemValue})}>
          <Picker.Item label="Young" value="young" />
          <Picker.Item label="Adult" value="adult" />
          <Picker.Item label="Senior" value="senior" />
        </Picker>

        <Picker style={styles.containerStyle}
          selectedValue={this.state.gender}
          onValueChange={(itemValue, itemIndex) => this.setState({gender:itemValue})}>
          <Picker.Item label="F" value="f" />
          <Picker.Item label="M" value="m" />
        </Picker>
      </View>

      <Button title="Submit" onPress={() => console.log(this.state)}/>
    </View>
    )
};

};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    position: 'relative',
    minWidth: '20%'
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  locationContainer: {
    marginTop: 100,
    alignItems: 'center'
  }


};

export default Form;