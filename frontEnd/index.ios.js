import Header from './src/components/Header';
import CarouselExample from './src/components/ShowCarousel';
import Button from './src/components/ShowButton';
import { Router, Scene } from 'react-native-router-flux';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Form from './src/components/Form';
import DogList from './src/components/DogList';

const allThemDogs = [
  dog1 = {
    name: 'Clifford',
    breed: 'Red Dog'
  },
  dog2 = {
    name: 'Snoopy',
    breed: 'Beagle'
  }
];


const frontEnd = () => (
  <Router>
    <Scene key="root">

    <Scene
      key="form"
      component={Form}
      hideNavBar
      initial
    />

    <Scene
      key="flip"
      component={CarouselExample}
      hideNavBar
    />

    </Scene>
  </Router>
  );


AppRegistry.registerComponent('frontEnd', () => frontEnd);
