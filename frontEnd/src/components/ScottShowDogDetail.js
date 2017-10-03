import React, { Component }  from 'react';
import { View, Text, Image } from 'react-native';
import ShowCard from './ShowCard';
import ShowCardSection from './ShowCardSection';
import DogContactInfo from './DogContactInfo';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

// const { name, sex, description, age, size, photo, shelter_id } = dog

// const { headContentStyle, pageHeadlineStyle, dogPictureContainer, dogPicture} = styles

class ScottShowDogDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      dog:""
    };
  }


  componentWillMount() {
     axios.get('http://localhost:3000/dogs/' + this.props.id)
     .then(response => this.setState({ dog: response.data }));
   }

 render(){
  return (
    <ShowCard>
      <ShowCardSection>
        <View style={styles.headContentStyle}>
          <Text style={styles.pageHeadlineStyle}>{this.state.dog.name}</Text>
        </View>
        <View style={styles.dogPictureContainer}>
          <Image source={{ uri: this.state.dog.photo }} style={styles.dogPicture}/>
        </View>
      </ShowCardSection>
      <DogContactInfo/>
    </ShowCard>
    );
  }
}



const styles = {
  headContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  pageHeadlineStyle: {
      textAlign: 'center',
      fontSize: 30,
      alignItems: 'center',
      height: 100,
      paddingTop: 20,
      elevation: 2,
      position: 'relative'
  },
  dogPictureContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  dogPicture: {
      height: 300,
      width: 300
  }
};

export default ScottShowDogDetail;