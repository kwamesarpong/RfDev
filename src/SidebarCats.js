import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from 'native-base'

const  SidebarCats = ({name, handleClick}) => (
    <TouchableOpacity onPress={() =>handleClick(name)} style={{flexDirection:'row', alignItems:'center', paddingTop:20}}>
        <Icon name='home' style={{paddingLeft:10}} />
        <Text style={{paddingLeft:20}}>{name}</Text>
    </TouchableOpacity>
)

export default SidebarCats;