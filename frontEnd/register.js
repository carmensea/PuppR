import React, { Component } from 'react';
import { StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  AsyncStorage,
  View,
  Image,
  Button,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { storeToken, getToken } from './token';
import wordLogo from './src/components/word-logo.png';
import pawLogo from './src/components/paw-logo.png';


ACCESS_TOKEN = 'access_token';

class Register extends Component {
  constructor(){
    super();

    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      errors: [],
    }
  }

  async onRegisterPressed() {
    { fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
          }
        })
      })
      .then( (res) => {
        console.log(res)
        if (res.status >= 200 && res.status < 300) {
        this.setState({error: ""});
        let accessToken = JSON.parse(res._bodyText).accessToken;
        storeToken(ACCESS_TOKEN, accessToken);
        console.log("res token: " + accessToken);
        Actions.form();
      } else {
        let error = JSON.parse(res._bodyText).error[0];
        this.setState({errors: error})
      }
    })
      .catch(errors => {
      console.log("catch errors: " + errors);
      let formErrors = JSON.parse(errors._bodyText).error;
      let errorsArray = [];
      for(let key in formErrors) {
        if(formErrors[key].length > 1) {
          formErrors[key].map(error => errorsArray.push(`${key} ${error}`))
        } else {
          errorsArray.push(`${key} ${formErrors[key]}`)
        }
      }
      this.setState({errors: errorsArray});
    })
  }
  }

  render() {
    return (
      <View style={styles.locationContainer}>
      <ScrollView>
       <Image style={{width: 90, height: 50}} source={pawLogo} />
        <Image style={{width: 200, height: 50}} source={wordLogo} />
        <Text style={styles.heading}>
          Meet Pets Now!
        </Text>
        <TextInput
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} placeholder="Email">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({name: text}) }
          style={styles.input} placeholder="Name">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({password: text}) }
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({password_confirmation: text}) }
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}>
        </TextInput>
        <TouchableHighlight onPress={this.onRegisterPressed.bind(this)} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>
        <Errors errors={this.state.errors} />

       <TouchableHighlight onPress={() => Actions.home()} style={styles.homeButtonStyle}>
          <Text style={styles.homeButtonText}>
            Homepage
          </Text>
        </TouchableHighlight>
      </ScrollView>
      </View>
    );
  }
}

const Errors = (props) => {
  console.log(props)
  return (
    <View style={styles.errorContainer}>
    {props.errors.map((error, i) => <Text key={i} style={styles.error}>{error}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  locationContainer: {
    paddingTop: '25%',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
 input: {
    height: 50,
    marginTop: 10,
    padding: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    width: 200
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: '#74F363',
    marginLeft: 90,
    marginRight: 90,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#74F363'
  },
  buttonText: {
    fontSize: 18,
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  },
  homeButtonStyle: {
    borderWidth: 2,
    borderColor: '#57e9d7',
    marginLeft: 90,
    marginRight: 90,
    borderRadius: 5,
    marginTop: 25,
    backgroundColor: '#57e9d7'
  },
  homeButtonText: {
    fontSize: 12,
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  },
  heading: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: '500',
    color: '#57e9d7'
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default Register
