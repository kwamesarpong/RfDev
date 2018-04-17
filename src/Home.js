import React, { PureComponent } from 'react';
import Expo, { Notifications } from 'expo';
import axios from 'axios'
import { View, Alert, ScrollView, Linking, AsyncStorage, StyleSheet, Dimensions } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
import Header from './Header'
import registerForNotifications from './services'
import SearchBar from './Search'
import MagicBar from './Magic';
import Products from './Products'
import Selection from './Selection'

class Home extends PureComponent {

  state = {
    img: ' ',
  }

  async componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;

      if (origin === 'received' && text) {
        Alert.alert(
          'Message from RoseFabrics',
          text,
          [{ text: 'Ok.' }]
        );
      }
    });

    const url = 'http://50.116.8.175/api/v1/service/rosefabrics/db?table=slider'
    const res = await axios.get(url, {headers: {'Devless-token': 'd463354149e3e51dd115ec140819e0a7'}})
    let sliderImage = res.data.payload.results;
    let sliderArray = sliderImage.reverse();
    this.setState({img:sliderArray[0].img_one})
  }


handleSelect = (data) => {
  Actions.product({data})
}

makeCall = () => {
  Linking.openURL('tel:+233272954084');
}

 render(){
   console.log(this.props.navigation.state.params.name)
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
      {/* { Alert.alert(`Welocome ${this.props.params.name}`)} */}
      <ScrollView>
        <SearchBar />
        <Card
        containerStyle={styles.container}
        wrapperStyle={styles.wrapper}
        imageStyle={styles.image}
        imageWrapperStyle={styles.imageWrapper}
        image={{uri: this.state.img}}>
        </Card>
        <MagicBar />
        <Selection />
        <Products handleSelect={this.handleSelect}/>
     </ScrollView>
      <View style={{alignItems:'flex-end', backgroundColor:'white'}}>
       <Icon 
          raised
          type='ionicon'
          color='red'
          name='ios-call'
          onPress={this.makeCall}
           />
       </View>
     </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
      margin: 0,
      padding: 0
  },
  wrapper: {
      padding: 0,
      margin: 0,
      height: Dimensions.get('window') * 0.95
  },
  image: {
    height: 250,
  }
})

export default Home