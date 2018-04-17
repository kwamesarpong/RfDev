import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const  TailorsList = (props) => (
      <TouchableOpacity onPress={props.onPressItem} style={{width: '50%'}}>
        <View style={styles.listItem}>
          <Image source={{uri:props.img_one}} style={{width: '80%',height:200}} />
          <Text>{props.name}</Text>
          <Text>{props.ig_account}</Text>
        </View>
     </TouchableOpacity>
)
 

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    alignItems: "center"
  }
});

export default TailorsList;
