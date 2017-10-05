import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>PuppR</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#ffdc87',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#4ca6a6',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  }
};

export default Header;

