import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import ShowDogDetail from './ShowDogDetail';
import Button from './ShowButton';
import { Actions } from 'react-native-router-flux';
import { storeToken, getToken } from '../../token';
import wordLogo from './word-logo.png';
import faves from './faves.jpg';
import searchPaw from './search-paw.png';


ACCESS_TOKEN = 'access_token'
const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
      dogs: this.props.dogs,
      token: this.props.token
    };
    console.log(this.state.token)
    this.renderDogs = this.renderDogs.bind(this);
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: 800 }});
  }

  renderDogs() {
    let token = this.state.token
    return this.state.dogs.map((dog, i) => {
      return (
        <ScrollView key={i}>
          <View
            style={this.state.size}
          >

            <ShowDogDetail dog={dog} token={token}/>
          </View>
        </ScrollView>
      );
    });
  }


  render() {
    return (
        <View style={styles.pageStyle} onLayout={this._onLayoutDidChange}>
          <View style={styles.headerStyle}>
          <TouchableOpacity onPress={() => Actions.favorites()}>
              <Image style={{width: 50, height: 50}} source={faves} />
            </TouchableOpacity>
            <Image source={wordLogo}/>
            <TouchableOpacity onPress={() => Actions.form()}>
              <Image style={{width: 50, height: 50}} source={searchPaw} />
            </TouchableOpacity>
          </View>

          <Carousel
            style={this.state.size}
            autoplay={false}
            swipe={true}
            pageInfo={true}
            onAnimateNextPage={(p) => console.log(p)}
          >
            {this.renderDogs()}
          </Carousel>
        </View>
    );
  }
}

const styles = {
  buttonStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  pageStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};
