import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class Element extends Component {
  render() {
    return (
      <View style={stylement.element}>
        <Text>{this.props.el.txt}</Text>
        <Button
          title="Delete"
          onPress={() => {
            this.props.onDelete(this.props.el.id)
          }}
        />
      </View>
    )
  }
}
const stylement = StyleSheet.create({
  element: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
})
export default Element
