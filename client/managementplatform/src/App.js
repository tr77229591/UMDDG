import React, { Component } from 'react'
import {Button} from 'antd'
import SiderMenu from './SiderMenu'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type='primary'>Button</Button>
        <SiderMenu></SiderMenu>
      </div>
    )
  }
}

export default App
