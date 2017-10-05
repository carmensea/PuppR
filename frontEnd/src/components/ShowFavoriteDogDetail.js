import React, { Component }  from 'react';
import { View, Text, Image, ScrollView , TouchableOpacity } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import DogContactInfo from './DogContactInfo';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import unmatchPaw from './unmatch-paw.png';
import faves from './faves.jpg';
import searchPaw from './search-paw.png';


class ShowFavoriteDogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog:"",
      shelter: ""
    };
  }

  componentWillMount() {
     axios.get('http://localhost:3000/dogs/' + this.props.id)
     .then(response => this.setState({ dog: response.data.dog, shelter: response.data.shelter }));
   }

   unlikeDog = () => {
    axios.delete('http://localhost:3000/dogs/' + this.props.id)
     .then(Actions.favorites);
   };

 render(){
  return (
    <View style={styles.pageStyle}>
    <ScrollView>
    <ShowCard>
      <ShowCardSection>
        <View style={styles.topInfo}>
          <View style={styles.headContentStyle}>
            <Text style={styles.pageHeadlineStyle}>{this.state.dog.name}</Text>
          </View>

          <View style={styles.shelterInfoContainer}>
            <Text style={styles.shelterInfoStyle}>
              Adopt Me Here: {this.state.shelter.address}{"\n"}
              Phone: {this.state.shelter.phone}
            </Text>
          </View>
        </View>

        <View style={styles.dogPictureContainer}>
          <Image source={{ uri: this.state.dog.photo }} style={styles.dogPicture}/>
        </View>

      </ShowCardSection>

       <View style={styles.iconStyle}>
        <TouchableOpacity onPress={() => Actions.favorites()}>
          <Image style={{width: 50, height: 50}} source={faves} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.form()}>
          <Image style={{width: 50, height: 50}} source={searchPaw} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.unlikeDog()} >
          <Image style={{width: 50, height: 50}} source={unmatchPaw} />
        </TouchableOpacity>
      </View>

      <View style={styles.aboutHeaderContainer}>
        <Text style={styles.aboutHeaderStyle}>About Me</Text>
      </View>

      <View>
        <Text style={styles.descriptionStyle}>{this.state.dog.description}</Text>
      </View>

    </ShowCard>
    </ScrollView>
    </View>
    );
  }
}



const styles = {
  topInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pageStyle: {
    paddingTop: 50,
    backgroundColor: 'white',
    flex: 1
  },
  headContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pageHeadlineStyle: {
    fontSize: 40,
    fontWeight: '400',
    color: '#F39A63',
    textAlign: 'center'
  },
  dogPictureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dogPicture: {
    width: 365,
    height: 365,
    resizeMode: 'contain'
  },
  shelterInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shelterInfoStyle: {
    textAlign: 'center',
    justifyContent: 'space-around',
    color: '#838887',
    fontSize: 16
  },
  aboutHeaderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutHeaderStyle: {
    fontSize: 28,
    fontWeight: '400',
    color: '#63F3E2',
    paddingTop: 25
  },
  descriptionStyle: {
    color: '#838887',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

export default ShowFavoriteDogDetail;