import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

class Bar extends Component {
  render() {
    return <View style={stl.bar} />
  }
}

const stl = StyleSheet.create({
  bar: {
    backgroundColor: '#5f5f5f',
    width: '100%',
    height: 25,
  },
})
export default Bar
