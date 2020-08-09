import React, { Component } from 'react'
import { View } from 'react-native'

import Bar from './components/bar'
import Title from './components/title'
import InputContainer from './components/inputContainer'
import Element from './components/element'

class App extends Component {
  state = {
    list: [
      {
        txt: 'el1',
        id: 1,
      },
      {
        txt: 'el2',
        id: 2,
      },
    ],
  }
  render() {
    return (
      <View>
        <Bar />
        <Title />
        <InputContainer onAdd={this.handleAdd} />
        {this.state.list.map((e) => (
          <Element key={e.id} onDelete={this.handleDelete} el={e} />
        ))}
      </View>
    )
  }
  handleAdd = (a) => {
    const list = [
      ...this.state.list,
      { txt: a, id: this.state.list[this.state.list.length - 1].id + 1 },
    ]
    this.setState({ list })
  }
  handleDelete = (a) => {
    this.setState({ list: this.state.list.filter((e) => e.id !== a) })
  }
}

export default App
