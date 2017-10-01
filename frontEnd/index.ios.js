import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import ShowDogList from './src/components/ShowDogList';
import CarouselExample from './src/components/ShowCarousel';
import Button from './src/components/ShowButton';

const App = () => (
  <View>
    <Header headerText={'PuppR'} />
    <CarouselExample test={'test'} />

  </View>
);

AppRegistry.registerComponent('frontEnd', () => App);
