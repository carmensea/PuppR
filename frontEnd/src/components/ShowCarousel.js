import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import ShowDogDetail from './ShowDogDetail';
import Button from './ShowButton';

const allThemDogs = [
  dog1 = {
    name: "Otis"
  },
  dog2 = {
    name: "Spot"
  }
];

const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: 500 } });
  }

  renderDogs() {
    return allThemDogs.map((dog, i) => {
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


{/*}<View style={[{ backgroundColor: 'red' }, this.state.size]}>
  <Button onPress={() => console.log("Left")}/>
  <Button onPress={() => console.log("Right")}/>
</View>
<View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
  <Button onPress={() => console.log("Left")}/>
  <Button onPress={() => console.log("Right")}/>
</View>
<View style={[{ backgroundColor: 'blue' }, this.state.size]}>
  <Button onPress={() => console.log("Left")}/>
  <Button onPress={() => console.log("Right")}/>
</View>*/}
