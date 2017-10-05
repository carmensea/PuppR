import React, { Component } from 'react';
import { StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage,
  Text,
  View,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { storeToken, getToken } from './token';
import wordLogo from './src/components/word-logo.png';
import pawLogo from './src/components/paw-logo.png';

ACCESS_TOKEN = 'access_token';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: "",
      password: "",
      errors: ""
    }
  }

  onLoginPressed() {
      {
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session: {
            email: this.state.email,
            password: this.state.password,
          }
        })
      })
      .then( (res) => {
        console.log(res)
        if (res.status >= 200 && res.status < 300) {
        this.setState({error: ""});
        let accessToken = JSON.parse(res._bodyText).accessToken;
        storeToken(ACCESS_TOKEN, accessToken);
        Actions.form();
      } else {
        let error = JSON.parse(res._bodyText).error;
        this.setState({errors: error})
      }
    })
      .catch(errors => {
        this.setState({errors: errors});
      })
    }
  }

  render() {
    return (
      <View style={styles.locationContainer}>
        <Image style={{width: 90, height: 50}} source={pawLogo} />
          <Image style={{width: 200, height: 50}} source={wordLogo} />
          <Text style={styles.heading}>
            Login
          </Text>

          <TextInput
            onChangeText={ (text)=> this.setState({email: text}) }
            style={styles.input} placeholder="Email">
          </TextInput>

          <TextInput
            onChangeText={ (text)=> this.setState({password: text}) }
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}>
          </TextInput>

          <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>
              Submit
            </Text>
          </TouchableHighlight>

          <Text style={styles.error}> {this.state.errors} < /Text>

          <TouchableHighlight onPress={() => Actions.home()} style={styles.homeButtonStyle}>
            <Text style={styles.homeButtonText}>
              Homepage
            </Text>
          </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationContainer: {
    paddingTop: '30%',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1
  },
  formContainer: {
    backgroundColor: 'white',
    flex: 1
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
  success: {
    color: 'green',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default Login
