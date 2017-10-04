import ShowDogList from './src/components/ShowDogList';
import CarouselExample from './src/components/ShowCarousel';
import ShowFavoriteDogDetail from './src/components/ShowFavoriteDogDetail';
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
import DogIndex from './src/components/DogIndex';
import TabIcon from './src/components/TabIcon';
import ViewFavorites from './src/components/ViewFavorites';

const frontEnd = () => (
  <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>

    <Scene key="root" hideNavBar={true}>
        <Scene
          key="favorites"
          component={DogIndex}
          title="PuppR"
        />

        <Scene
          key="show"
          component={ShowFavoriteDogDetail}
          title="PuppR"
        />
        <Scene
          key="form"
          component={Form}
          title="PuppR"
          initial
        />

        <Scene
          key="flip"
          component={CarouselExample}
          title="PuppR"
        />

      {/* this closes bar*/}

      </Scene>
  </Router>
  );




const styles = {
  navBar: {
    height: 90
  },
  navBarTitle: {
    color: '#7EA8BE',
    fontSize: 45,
    fontFamily: 'Helvetica',
    fontWeight: '500'
  }

};

AppRegistry.registerComponent('frontEnd', () => frontEnd);
