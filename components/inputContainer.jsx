import React, { Component } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

class InputCantainer extends Component {
  state = { text: '' }
  render() {
    return (
      <View style={styleinput.input}>
        <TextInput
          value={this.state.text}
          style={styleinput.txt}
          onChangeText={(text) => this.setState({ text })}
          placeholder="Enter An Element"
        />
        <View style={styleinput.add}>
          <Button
            title="ADD"
            onPress={() => {
              if (this.state.text != '') this.props.onAdd(this.state.text)
              this.setState({ text: '' })
            }}
          />
        </View>
      </View>
    )
  }
}
const styleinput = StyleSheet.create({
  input: {
    flexDirection: 'row',
    margin: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  txt: {
    backgroundColor: '#f4f4f4',
    flex: 2,
    fontSize: 19,
  },
  add: {
    flex: 1,
  },
})

export default InputCantainer
