import React, { Component } from 'react';
import { StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  AsyncStorage,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export  async function storeToken(storageKey, accessToken) {
    try {
      await AsyncStorage.setItem(storageKey, accessToken);
      getToken();
    } catch(error){
      console.log("AKJSG: " + error)
    }
  }

export async function getToken() {
    try {
      return await AsyncStorage.getItem(ACCESS_TOKEN);
    } catch(error){
      console.log("something went wrong")
    }
  }

