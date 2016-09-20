import React, { Component, PropTypes } from 'react'

import CategoryPickerButton from './CategoryPickerButton'

class CategoryPicker extends Component {
  render() {
    return (
      <ul>
        <li>
          <CategoryPickerButton category="top">Top</CategoryPickerButton>
        </li>
        <li>
          <CategoryPickerButton category="new">New</CategoryPickerButton>
        </li>
      </ul>
    )
  }
}

CategoryPicker.propTypes = {};

export default CategoryPicker
