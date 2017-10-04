import React, { Component }  from 'react';
import { View, Text, Image, ScrollView , TouchableOpacity } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import DogContactInfo from './DogContactInfo';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import unmatchPaw from './unmatch-paw.png'

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
     .then(Actions.favorites());
   };

 render(){
  return (
    <ScrollView>
    <ShowCard>
      <ShowCardSection>
        <View style={styles.headContentStyle}>
          <Text style={styles.pageHeadlineStyle}>{this.state.dog.name}</Text>
        </View>

        <View style={styles.dogPictureContainer}>
          <Image source={{ uri: this.state.dog.photo }} style={styles.dogPicture}/>
        </View>

      </ShowCardSection>
      <View>
        <Text style={styles.shelterInfoStyle}>
        Adopt Me Here: {this.state.shelter.address}{"\n"}
        Phone: {this.state.shelter.phone}</Text>
      </View>

      <View style={styles.aboutHeaderContainer}>
        <Text style={styles.aboutHeaderStyle}>About {this.state.dog.name}</Text>
      </View>

      <TouchableOpacity onPress={() => this.unlikeDog()} >
          <Image style={{width: 50, height: 50}} source={unmatchPaw} />
        </TouchableOpacity>

      <View>
        <Text>{this.state.dog.description}</Text>
      </View>

    </ShowCard>
    </ScrollView>
    );
  }
}



const styles = {
  headContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pageHeadlineStyle: {
    fontSize: 40,
    fontWeight: '300',
    color: '#8ED359',
    textAlign: 'center'
  },
  dogPictureContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 35,
    paddingBottom: 20
  },
  dogPicture: {
    width: 365,
    height: 365,
    resizeMode: 'contain'
  },
  shelterInfoStyle: {
    textAlign: 'center'
  },
  aboutHeaderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutHeaderStyle: {
    fontSize: 25,
    fontWeight: '300'
  }

};

export default ShowFavoriteDogDetail;