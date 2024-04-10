import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MobileList from '../components/MobileList'
const MobileScreen = (props) => {
  return (
    <View>
      <MobileList navigation={props.navigation}/>
    </View>
  )
}

export default MobileScreen

const styles = StyleSheet.create({})