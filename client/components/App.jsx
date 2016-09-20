import React, { Component } from 'react';

import CategoryPicker from './CategoryPicker'
import ThreadList from '../containers/ThreadList'

class App extends Component {
  render() {
    return (
      <div>
        <CategoryPicker />
        <ThreadList />
      </div>
    )
  }
}

export default App;
