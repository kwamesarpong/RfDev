import React, { PureComponent } from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base'
import { Actions } from "react-native-router-flux";
import { Card, Button } from 'react-native-elements'
import { AsyncStorage, Alert } from 'react-native'

class TailorDetails extends PureComponent {

    state = {
        quantity: 2,
        ig_account: '',
        name: '',
        img: ' ',
        id: ''
    }   

    componentDidMount() {
        this.setState({
            ig_account: this.props.data.ig_account,
            name: this.props.data.name,
            img: this.props.data.img_one,
            id: this.props.data.id
        })
    }


    render(){
        const { quantity, ig_account, name, img } = this.state
        return (
            <View style={{backgroundColor: 'white', height: '100%'}}>
                <Card containerStyle={styles.container} imageStyle={styles.image}
                    image={{uri: img}}>
                    <Text style={{marginBottom: 10, textAlign:'center'}}>
                        {name}
                    </Text>
                    <Text style={{marginBottom: 10, textAlign:'center'}}>
                        {ig_account}
                    </Text>
                    <Button
                        backgroundColor='red'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Rate' 
                    />
                </Card>
            </View>
    
        )
    }
}
     


const styles  = StyleSheet.create({
   container: {
       marginTop: '10%',
       alignContent: 'center'
   },
   image: {
       width: '100%',
       height: 250
   }
})
export default TailorDetails