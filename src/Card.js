import React from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Dimensions, ScrollView } from 'react-native'

const ImageHolder = () => (
    <ScrollView>
    <Card
        containerStyle={styles.container}
        wrapperStyle={styles.wrapper}
        imageStyle={styles.image}
        imageWrapperStyle={styles.imageWrapper}
        image={require('../slider.jpeg')}>
  </Card>
  </ScrollView>
)

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

export default ImageHolder