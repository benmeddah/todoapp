import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

class Title extends Component {
  render() {
    return <Text style={stl.title}>Handed</Text>
  }
}

const stl = StyleSheet.create({
  title: {
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
})
export default Title
