import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import ShowDogDetail from './ShowDogDetail';
import Button from './ShowButton';
import { Actions } from 'react-native-router-flux';


const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      dogs: this.props.data
    };
    this.renderDogs = this.renderDogs.bind(this);
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: 500 }});
  }

  renderDogs() {
    console.log(this.props)
    console.log(this.props.data)
    return this.props.data.map((dog, i) => {
      return (
        <View
          style={this.state.size}
          key={i}
        >
          <ShowDogDetail dog={dog}/>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
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
  }
};
