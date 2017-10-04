import React, { Component } from 'react';
import { StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ACCESS_TOKEN = 'access_token';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }
  async storeToken(accessToken) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
      this.getToken();
    } catch(error){
      console.log("something went wrong")
    }
  }

  async getToken() {
    try {
      return await AsyncStorage.getItem(ACCESS_TOKEN);
    } catch(error){
      console.log("something went wrong")
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
        if (res.status >= 200 && res.status < 300) {
        this.setState({error: ""});
        let accessToken = JSON.parse(res._bodyText).text;
        this.storeToken(accessToken);
        console.log("res token: " + accessToken);
        Actions.form();
      } else {
        let error = res;
        throw error;
      }
    })
      .catch(error => {
        this.setState({error: error});
        console.log(error);
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
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
        <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>


      </View>
    );
  }
}


const styles = StyleSheet.create({
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
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
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
