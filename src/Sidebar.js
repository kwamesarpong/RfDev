import React, { PureComponent } from 'react'
import { View, ScrollView, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { Icon } from 'native-base'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import SidebarCats from './SidebarCats'

class Sidebar extends PureComponent {

    state = {
        data: [],
      }

    async componentWillMount(){
        const url = 'http://50.116.8.175/api/v1/service/rosefabrics/db?table=categories'
        const res = await axios.get(url, {headers: {'Devless-token': 'd463354149e3e51dd115ec140819e0a7'}})
        const resReversed = res.data.payload.results.reverse();
        const resSliced = resReversed.slice(0, 5)
        this.setState({ data:resSliced })
      }

      handleClick = async(data) => {
        await AsyncStorage.setItem('cat', JSON.stringify(data))
        Actions.categorieshome();
      }

      renderCats = () => {
        return this.state.data.map((data, i) => {
          return (
           <SidebarCats
            key={i}
            {...data}
            handleClick={this.handleClick}
           />
          )
         
        })
      }

    logout = async() => {
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user_id')
        await AsyncStorage.removeItem('pushtoken')
        Actions.login()
    }

    render(){
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'white', paddingBottom: 30 }}>
                <TouchableOpacity onPress={() => Actions.home()} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Icon name='home' color='red' style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.carts()}  style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Icon name='home' style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Carts</Text>
                </TouchableOpacity>
                {this.renderCats()}
                <TouchableOpacity onPress={() => Actions.morecatshome()} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Icon name='home' style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>More Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.tailorshome()} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Icon name='home' style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Tailors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Icon name='home' style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Icon name='home' style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.logout} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
                    <Icon name='home' style={{paddingLeft:10}} />
                    <Text style={{paddingLeft:20}}>Logout</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

export default Sidebar